import React from 'react';
import { AuthProvider, useAuth } from './components/AuthProvider';

import { authenticate } from './firebase';

const Component = () => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  return <>{isAuthenticated ? 'Authenticated' : 'Not authenticated'}</>;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Component />
      </AuthProvider>
      <button onClick={authenticate}>Google sign-in</button>
    </div>
  );
}

export default App;

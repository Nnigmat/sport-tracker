import { getAuth, GoogleAuthProvider, signInWithPopup, AuthError, NextOrObserver, User } from "firebase/auth";
import { firebase } from ".";

export async function authenticate() {
  const auth = getAuth(firebase);
  const provider = new GoogleAuthProvider();


  try {
    return await signInWithPopup(auth, provider);
  } catch (err) {
    const error = err as AuthError;

    return {
      errorCode: error.code,
      errorMessage: error.message,
    };
  }
}

export function onAuthStateChanged(callback: NextOrObserver<User | null>) {
  const auth = getAuth(firebase);

  auth.onAuthStateChanged(callback);
}

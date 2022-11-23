import {
    GithubAuthProvider,
    TwitterAuthProvider,
    signInWithPopup,
    linkWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    UserCredential,
    User
  } from "firebase/auth";

import { firebaseAuth } from "./firebase";

export const useStore = () => {
    const storeScore = async () => {
        
    }

    return {
        storeScore
    }
}
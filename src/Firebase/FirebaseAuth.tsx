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
  export const useAuth = () => {
  
    const loginWithEmail =  async (email: string, password: string) => {
      return await signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signinWithEmail = async (email: string, password: string) => {
      return await createUserWithEmailAndPassword(firebaseAuth, email, password)
      }

    const googleLogin = async () => {
      const provider = new GoogleAuthProvider();
      return await signInWithPopup(firebaseAuth, provider)
    };
    
    // GitHubでログイン
    const githubLogin = async () => {
      const provider = new GithubAuthProvider();
      return await signInWithPopup(firebaseAuth, provider)
    };
  
    // ツイッター連携
    const twitterLink = async () => {
      const provider = new TwitterAuthProvider();
      if (firebaseAuth.currentUser) {
        return await linkWithPopup(firebaseAuth.currentUser, provider)
      }
    };
    
    // ログアウト
    const logout = () => {
      return signOut(firebaseAuth);
    };
  
    return {
      loginWithEmail,
      signinWithEmail,
      googleLogin,
      githubLogin,
      twitterLink,
      logout
    };
  };
  
  
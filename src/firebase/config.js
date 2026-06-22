// Firebase Configuration
// =====================
// IMPORTANT: Replace these placeholder values with your actual Firebase project config.
// 
// To get your Firebase config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or select existing)
// 3. Go to Project Settings > General > Your apps > Web app
// 4. Click "Add app" (web icon </>) and register your app
// 5. Copy the firebaseConfig object and paste it below
// 6. Enable Authentication > Sign-in method > Google (and Email/Password if needed)

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export default app;

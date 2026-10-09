import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

let app: any;
let auth: any;
let db: any;
let storage: any;

// Only initialize Firebase if a real API key is provided
// This prevents 400 Bad Request console errors from the Firebase SDK
if (apiKey && apiKey !== "AIzaSyDummyKeyDummyKeyDummyKeyDummyKey1" && apiKey !== "your_api_key_here") {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (e) {
    console.warn("Firebase initialization error:", e);
  }
} else {
  console.warn("No valid Firebase API Key found. Running with Mock Auth State. (This prevents console errors)");
}

export { app, auth, db, storage };

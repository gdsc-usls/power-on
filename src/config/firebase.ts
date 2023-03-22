import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

let analytics: Analytics;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_API_KEY!,
  authDomain: import.meta.env.VITE_PUBLIC_AUTH_DOMAIN!,
  projectId: import.meta.env.VITE_PUBLIC_PROJECT_ID!,
  storageBucket: import.meta.env.VITE_PUBLIC_STORAGE_BUCKET!,
  messagingSenderId: import.meta.env.VITE_PUBLIC_MESSAGING_SENDER_ID!,
  appId: import.meta.env.VITE_PUBLIC_APP_ID!,
  measurementId: import.meta.env.VITE_PUBLIC_MEASUREMENT_ID!,
};

const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);
export { app, db, analytics };

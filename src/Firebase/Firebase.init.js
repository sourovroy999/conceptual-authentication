
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYlCHp6TL_0TvRfZiV5Uvp2TKhCUxFlDM",
  authDomain: "conceptual-authenticatio-c7691.firebaseapp.com",
  projectId: "conceptual-authenticatio-c7691",
  storageBucket: "conceptual-authenticatio-c7691.firebasestorage.app",
  messagingSenderId: "393049791393",
  appId: "1:393049791393:web:fe15425049df7a534989e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
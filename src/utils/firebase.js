import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4fWqLIIUohfx5HzvRugtVjAEasdQ4nwg",
  authDomain: "cinematv-66471.firebaseapp.com",
  projectId: "cinematv-66471",
  storageBucket: "cinematv-66471.appspot.com",
  messagingSenderId: "380986476090",
  appId: "1:380986476090:web:4fc7d660f669d3b8029703",
  measurementId: "G-C7W7QRGGM5",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

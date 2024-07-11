import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzyYX_kXj2OplnsXUbsesZ6AekNSRnYX0",
  authDomain: "my-project-8d39d.firebaseapp.com",
  projectId: "my-project-8d39d",
  storageBucket: "my-project-8d39d.appspot.com",
  messagingSenderId: "544469084078",
  appId: "1:544469084078:web:2a1b44543fe9d86fbc4a3f",
  measurementId: "G-M63TD685DT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALd1H9WatkzFcCDZqyQrYFe3QybU4_wzA",
  authDomain: "galtogo-7a373.firebaseapp.com",
  projectId: "galtogo-7a373",
  storageBucket: "galtogo-7a373.appspot.com",
  messagingSenderId: "1049509182829",
  appId: "1:1049509182829:web:b664606314e47be12cee64",
  measurementId: "G-EEG3M31Z30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZDC0uDTJ3nAQuF1V4weoeCCZM9AtNVK8",
  authDomain: "miniblogreact-bc366.firebaseapp.com",
  projectId: "miniblogreact-bc366",
  storageBucket: "miniblogreact-bc366.appspot.com",
  messagingSenderId: "555053653591",
  appId: "1:555053653591:web:5de9f6e2d6ea4744a4cd12",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

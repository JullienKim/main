// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcTWPfHHer1IG0zAmIcPpU07YsH8odjXg",
  authDomain: "sns-flatform-sample.firebaseapp.com",
  projectId: "sns-flatform-sample",
  storageBucket: "sns-flatform-sample.appspot.com",
  messagingSenderId: "619107401791",
  appId: "1:619107401791:web:5efeb74c3f41f9b4f6388a",
  // measurementId: "G-YQJ3QNTEBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// export const storage = getStorage(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

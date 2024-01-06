// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANxSVN_CF8O-xl68V-5W7PxiCOb5NOuzI",
  authDomain: "twitter3-92220.firebaseapp.com",
  projectId: "twitter3-92220",
  storageBucket: "twitter3-92220.appspot.com",
  messagingSenderId: "180207405658",
  appId: "1:180207405658:web:b9601b0c9c80acc5576663",
  measurementId: "G-RTKPHL0PMT"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
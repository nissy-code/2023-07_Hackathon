// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// storageを使えるように
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApHNZSOPClYsaDwU6hM-pnld6CYwpNn6o",
  authDomain: "imageuploader-hackathon.firebaseapp.com",
  projectId: "imageuploader-hackathon",
  storageBucket: "imageuploader-hackathon.appspot.com",
  messagingSenderId: "675389851171",
  appId: "1:675389851171:web:ffdca157544e5dad049396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
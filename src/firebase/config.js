import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDgtHXla6Uowvd2k7V42diPQoVKeAXLd0w",
  authDomain: "socialmediaapp-ed072.firebaseapp.com",
  projectId: "socialmediaapp-ed072",
  storageBucket: "socialmediaapp-ed072.appspot.com",
  messagingSenderId: "839931370945",
  appId: "1:839931370945:web:2d78bab2a39078174de340",
};

//init firebase
// const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
//init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(firebaseApp);

export { db, auth, storage };

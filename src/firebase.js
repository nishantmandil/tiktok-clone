import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-D9DT8-8zwLPhEI-EmV3fWJNvun0JOvk",
    authDomain: "tik-tok-2021.firebaseapp.com",
    projectId: "tik-tok-2021",
    storageBucket: "tik-tok-2021.appspot.com",
    messagingSenderId: "957956924720",
    appId: "1:957956924720:web:e6444190c3bced829114f5",
    measurementId: "G-WMQ3PTE5FP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
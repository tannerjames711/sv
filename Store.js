// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore"; 


// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     apiKey: "AIzaSyAX754SV_qLKXcqj2SrJyfRZLDKRs6BZLI",
//     authDomain: "rollingapp-87815.firebaseapp.com",
//     projectId: "rollingapp-87815",
//     storageBucket: "rollingapp-87815.appspot.com",
//     messagingSenderId: "396937010546",
//     appId: "1:396937010546:web:e472bd306a0bc5f4a1d1eb"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);


// try {
//   const docRef = await addDoc(collection(db, "post"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
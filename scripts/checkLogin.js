//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import {
getFirestore,
collection,
getDocs,
doc,
getDoc,
addDoc,
setDoc,
deleteDoc,
updateDoc,
query,
where,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {
getAuth,
signOut,
onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK9OpqxgXweeaqCmZ9E96uf_zFEVx8L1Q",
    authDomain: "authentication-6f44f.firebaseapp.com",
    databaseURL: "https://authentication-6f44f-default-rtdb.firebaseio.com",
    projectId: "authentication-6f44f",
    storageBucket: "authentication-6f44f.appspot.com",
    messagingSenderId: "88159277500",
    appId: "1:88159277500:web:ef9a68f1d1c000c97c1bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

var logOut = document.querySelector('.logOut');
console.log(logOut);

logOut.addEventListener('click',(e)=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      swal({
        title: "Log Out Successful!",
        text: "See Yah!",
        icon: "success",
        button: "Aww yiss!",
      });

      window.location = "index.html";

    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
 
        swal({
            title: "Some thing went wrong",
            text: "Section Has Been Fail!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
    });
 
 });

onAuthStateChanged(auth, (userCred) => {
    if (userCred) {
        // swal({
        //     title: "Login Successful!",
        //     text: "Alright, Let's Go!",
        //     icon: "success",
        //     button: "Aww yiss!",
        // });
    } else {
    window.location = "login.html";
    }
});
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
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
const SignupForm = document.querySelector("#Sign-up");
const announce = document.querySelector("#announce");
const db = getFirestore();
// const database = getDatabase(app);
const auth = getAuth();

SignupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = SignupForm["email"].value;
  const password = SignupForm["password"].value;
  const username = SignupForm["Username"].value;
  console.log(username)
  // const lenght = SignupForm['password'].value.length;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      

      setDoc(doc(db, "users", user.uid),{
          username: username,
          email: email
      })

      window.location.assign("index.html");
    })
    .catch((err) => {
      
      swal({
        title: "Some thing went wrong",
        text: "Email Address Has Been Used!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    });
        
});

function createUserProfile(UID) {
  // return setDoc(doc(db, "users", UID), {
  //   trees: 0,
  //   pomodoroDuration: 25,
  //   shortBreakDuration: 10,
  //   longBreakDuration: 15,
  //   tags: ["Home", "Freetime", "Work", "School"],
  // });

  return set(ref(database, 'users/' + user.uid),{
    username: username,
    email: email
  })

}

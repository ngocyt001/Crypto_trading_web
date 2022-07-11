import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAK9OpqxgXweeaqCmZ9E96uf_zFEVx8L1Q",
    authDomain: "authentication-6f44f.firebaseapp.com",
    databaseURL: "https://authentication-6f44f-default-rtdb.firebaseio.com",
    projectId: "authentication-6f44f",
    storageBucket: "authentication-6f44f.appspot.com",
    messagingSenderId: "88159277500",
    appId: "1:88159277500:web:ef9a68f1d1c000c97c1bb9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const errorinner = document.querySelector("#error");
const LoginForm = document.querySelector("#Login");
const forgot = document.querySelector(".forgot");
const popup = document.querySelector("#mail-verify");
const close = document.querySelector(".closeIcon");
const body = document.querySelector(".body");
const signIn = document.querySelector(".sign-in");
/// login form
const FormMail = document.querySelector("#mail");
const decor = document.querySelectorAll(".decor");

FormMail.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = FormMail["email"].value;
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      swal({
        title: "Reset Password Successful!",
        text: "Please check email to change your password!",
        icon: "success",
        button: "Aww yiss!",
      });
    })
    .catch((error) => {
      swal({
        title: "Reset Password Failed",
        text: "May Be Wrong Email, Please Try Again",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    });
});
LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = LoginForm["email"].value;
  const password = LoginForm["password"].value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location = "index.html";
    })
    .catch((error) => {
      swal({
        title: "Some thing went wrong",
        text: "Username or Password is Incorrect!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    });
});

// popup verify email

forgot.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "block";
  signIn.style.display = "none";
  body.classList.add("bodyStyle");
  for (let i = 0; i <= decor.length; i++) {
    decor[i].src = "./img/mail.png";
  }
});
close.onclick = function () {
  popup.style.display = "none";
  signIn.style.display = "block";
  body.classList.remove("bodyStyle");
  for (let i = 0; i <= decor.length; i++) {
    decor[i].src = "./img/mail.png";
  }
};
// window.onclick = function (event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//     signIn.style.display = "block";
//     body.classList.remove("bodyStyle");
//     for (let i = 0; i <= decor.length; i++) {
//       decor[i].src = "./images/favorite.png";
//     }
//   }
// };

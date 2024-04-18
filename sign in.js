
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIPcA7rQl5c3LqD6LKlo-pD9jw85xmQic",
  authDomain: "login-3e500.firebaseapp.com",
  projectId: "login-3e500",
  storageBucket: "login-3e500.appspot.com",
  messagingSenderId: "495574766275",
  appId: "1:495574766275:web:07b0d49046c26007c4c876"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener('click', function () {
  signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
   
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
   
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})

const GoogleLogin = document.getElementById("google-signup-btn");
googleLogin.addEventListener('click', function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const Credential = GoogleAuthProvider.CredentialFromResults(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../logged.html";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });




})

function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;

  document.getElementById("userName").textContent = userName;
  document.getElementById("useremail").textContent = userEmail;
  document.getElementById("userProfilePicture").textContent = userProfilePicture;
}

updateUserProfile







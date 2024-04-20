import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
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
const user = auth.currentUser;
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    console.log(userEmail)
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account & login");
    }
})
updateUserProfile();
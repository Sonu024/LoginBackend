// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZMnU9yPE7CZ7ETRroJkNA4aVk6mlg67I",
  authDomain: "userauthentication-eb4bb.firebaseapp.com",
  projectId: "userauthentication-eb4bb",
  storageBucket: "userauthentication-eb4bb.appspot.com", // fixed
  messagingSenderId: "853966931341",
  appId: "1:853966931341:web:959ac45cb7c0a5735ca9c4",
  measurementId: "G-M0B9SWHKSE"
});

const auth = firebase.auth();

// Expose to global scope
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signed up successfully!\nUser ID: " + user.uid);
      console.log("User created:", user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error(error);
    });
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Welcome back, " + user.email);
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
};

window.logout = function () {
  auth.signOut()
    .then(() => {
      alert("Logged out successfully.");
    })
    .catch((error) => {
      alert("Logout error: " + error.message);
    });
};

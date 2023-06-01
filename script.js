// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmUl-GqKERW9nVtOgpF6ClcDJYdr-IfwM",
    authDomain: "signup-app-51fdc.firebaseapp.com",
    projectId: "signup-app-51fdc",
    storageBucket: "signup-app-51fdc.appspot.com",
    messagingSenderId: "598696994938",
    appId: "1:598696994938:web:a5361f701389e6082c33c3",
    measurementId: "G-4NSQ66E8NK"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics();
  
  const auth = firebase.auth();
  
  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signup successful, do something with the user object
        const user = userCredential.user;
        console.log("Signup successful:", user);
      })
      .catch((error) => {
        // Signup failed, handle the error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup failed:", errorCode, errorMessage);
      });
  });
  
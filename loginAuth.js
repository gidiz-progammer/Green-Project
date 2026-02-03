// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   signOut
// } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// // 🔐 Your Firebase config (from Firebase Console)
// const firebaseConfig = {
// apiKey: "AIzaSyBnpg1zVQr2-mEPwet80zNExFaPEjls4Hc",
//   authDomain: "green-world-project.firebaseapp.com",
//   projectId: "green-world-project",
//   storageBucket: "green-world-project.firebasestorage.app",
//   messagingSenderId: "1096759081626",
//   appId: "1:1096759081626:web:1f15a558d2bfcad1b7bd23"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const msg = document.getElementById("msg");

// // 🟢 SIGN UP
// document.getElementById("signupBtn").addEventListener("click", async () => {
//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;

//   try {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await sendEmailVerification(userCred.user);
//     msg.innerText = "Verification email sent. Check your inbox 📩";
//   } catch (err) {
//     msg.innerText = err.message;
//   }
// });

// // 🔵 LOGIN
// document.getElementById("loginBtn").addEventListener("click", async () => {
//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   try {
//     const userCred = await signInWithEmailAndPassword(auth, email, password);

//     if (!userCred.user.emailVerified) {
//       await signOut(auth);
//       msg.innerText = "Please verify your email before logging in 📧";
//       return;
//     }

//     msg.innerText = "Login successful ✔";
//     // window.location.href = "dashboard.html";
//   } catch (err) {
//     msg.innerText = err.message;
//   }
// });
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// import {
//   getAuth,
//   sendSignInLinkToEmail,
//   isSignInWithEmailLink,
//   signInWithEmailLink
// } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// // 🔐 Firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyBnpg1zVQr2-mEPwet80zNExFaPEjls4Hc",
//   authDomain: "green-world-project.firebaseapp.com",
//   projectId: "green-world-project",
//   storageBucket: "green-world-project.firebasestorage.app",
//   messagingSenderId: "1096759081626",
//   appId: "1:1096759081626:web:1f15a558d2bfcad1b7bd23"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const msg = document.getElementById("msg");
// const emailInput = document.getElementById("emailInput");
// const sendCodeBtn = document.getElementById("sendCodeBtn");
// const otpSection = document.getElementById("otpSection");
// const otpInput = document.getElementById("otpInput");
// const verifyCodeBtn = document.getElementById("verifyCodeBtn");

// // Configure magic link
// const actionCodeSettings = {
//   url: window.location.href,
//   handleCodeInApp: true,
// };

// // Step 1: Send sign-in code (magic link) to email
// sendCodeBtn.addEventListener("click", async () => {
//   const email = emailInput.value;

//   if (!email.includes("@")) {
//     msg.innerText = "Please enter a valid email";
//     return;
//   }

//   try {
//     await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//     window.localStorage.setItem("emailForSignIn", email);
//     msg.innerText = "Code sent! Check your inbox 📩";
//     otpSection.style.display = "block";
//   } catch (err) {
//     msg.innerText = err.message;
//   }
// });

// // Step 2: Verify code
// verifyCodeBtn.addEventListener("click", async () => {
//   const email = window.localStorage.getItem("emailForSignIn");
//   const code = window.location.href; // Firebase magic link sends it via URL

//   try {
//     if (isSignInWithEmailLink(auth, code)) {
//       await signInWithEmailLink(auth, email, code);
//       msg.innerText = "Login successful ✔";
//       window.localStorage.removeItem("emailForSignIn");
//       // redirect to dashboard
//       // window.location.href = "dashboard.html";
//     } else {
//       msg.innerText = "Invalid code or link";
//     }
//   } catch (err) {
//     msg.innerText = err.message;
//   }
// });

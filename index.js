// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRezIfnqDVmNc3Lp4hIBsMvzoKsMvnF0s",
  authDomain: "personal-diary-9a754.firebaseapp.com",
  projectId: "personal-diary-9a754",
  storageBucket: "personal-diary-9a754.appspot.com",
  messagingSenderId: "955983757763",
  appId: "1:955983757763:web:5ccad8e478485019513d76",
  measurementId: "G-REE43TJ8PP"
};
firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const db=firebase.firestore()
const Login=()=>
{
    const email=document.getElementById("email").value
    const password=document.getElementById("Password").value
    auth.signInWithEmailAndPassword(email,password)
    .then(()=>
    {
        window.location.href="diary.html";
})
.catch((error)=>{
  console.log("ERROR WITH LOGIN",error.message);
});
}
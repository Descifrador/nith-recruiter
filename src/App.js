import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Links from "./Routes";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6Do0Qg9Gbk3Ajbsr1zEGoDCaK7JC_Qs",
  authDomain: "nith-recruiter.firebaseapp.com",
  projectId: "nith-recruiter",
  storageBucket: "nith-recruiter.appspot.com",
  messagingSenderId: "998833580900",
  appId: "1:998833580900:web:e822e4a667c256da646871"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {  
  return (
    <div className="App">
      <Links />
    </div>
  );
}

export default App;

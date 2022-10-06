import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { AppComponent } from '../app.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOsDWfsx9igTPKgRVXrDGsH8ydFKiRQ0o",
  authDomain: "simulacro-p1.firebaseapp.com",
  projectId: "simulacro-p1",
  storageBucket: "simulacro-p1.appspot.com",
  messagingSenderId: "264399079369",
  appId: "1:264399079369:web:2e815b5a388725675b8a18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


@Injectable({
  providedIn: 'root'
})
export class SrvFirebaseService 
{

  flagLoged = false;

  constructor(private router: Router, private route: ActivatedRoute)
  {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => 
    {
      if (user) 
      {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        //Si el usuario esta logeado
        //..
        this.flagLoged = true;
        let btnLogin = document.getElementById("btnLogin");
        // let btnRegister = document.getElementById("btnSignUp");

        btnLogin?.setAttribute("hidden","true");
        // btnRegister?.setAttribute("hidden","true");

        let btnLogOut = document.getElementById("btnLogout");
        btnLogOut?.removeAttribute("hidden");

        console.log("LOGEADO!!!");  
        console.log(user.email);

        let mailShower = document.getElementById("userMail-loged");
        mailShower?.removeAttribute("hidden");

        // ...
      } else 
      {
        // User is signed out
        // ...
        //Si el usuario no esta logeado
        //..
        let btnLogin = document.getElementById("btnLogin");
        // let btnRegister = document.getElementById("btnSignUp");

        btnLogin?.removeAttribute("hidden");
        // btnRegister?.removeAttribute("hidden");

        let btnLogOut = document.getElementById("btnLogout");
        btnLogOut?.setAttribute("hidden","true");

        let mailShower = document.getElementById("userMail-loged");
        mailShower?.setAttribute("hidden","true");

        console.log("DESLOGEADO!!");
      }
    });

  }

  logOut()
  {
    const auth = getAuth();
    signOut(auth).then(() => 
    {
      // Sign-out successful.
      console.log("Cierre de sesión satisfactorio. Vuelva prontosss!");
      this.router.navigate(['/login']);

    }).catch((error) => 
    {
      // An error happened.
      console.log(error);
    });
  }

  navigateLogin()
  {
    this.router.navigate(["/login"],);
  }

  // navigateRegister()
  // {
  //   this.router.navigate(["/register"],);
  // }
}

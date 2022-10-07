import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { AppComponent } from '../app.component';
import { Entidad } from '../Entidades/entidad';
import { Entidad2 } from '../Entidades/entidad2';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

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

// Create a root reference
const db = getFirestore(app);
const repartidores = collection(db, "Repartidores");
// const peliculas = collection(db, "Peliculas"); 

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

    this.leerDBRepartidores();

  }

  repartidoresDB: Entidad[] = [];
  // peliculasDB: Entidad2[] = [];

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

  async leerDBRepartidores() 
  {
    console.log("-------------------------------------");
    console.log("REPARTIDORES LEIDOS DE LA DB:")

    //Obtengo los documentos de forma asincronica, con un await. Por cada documento creo un usuario le asigno los datos y lo guardo
    const querySnapshot = await getDocs(repartidores);
    querySnapshot.forEach((doc) => 
    {
        // imprimo la data
        console.log(doc.id, " => ", doc.data());

        let repartidor = new Entidad(doc.data()['nombre'],doc.data()['dni'],doc.data()['edad'],doc.data()['capacidadTransporte'],doc.data()['pais'],doc.data()['unidadPropia']);
        this.repartidoresDB.push(repartidor);
    });
  }

  async agregarRepartidorDB(repartidor:Entidad)
  {
      //--------------- Guardo al repartidor en la DB ---------------------
      this.repartidoresDB.push(repartidor);
      //----------------------------------------------------------------

      // Add a new document with a generated id. (TENGO EN "DocRef" la referencia a ese usuario si me hiciese falta)
      const docRef = await addDoc(collection(db, "Repartidores"), 
      {
        nombre: repartidor.nombre,
        dni: repartidor.dni,
        edad: repartidor.edad,
        capacidadTransporte: repartidor.capacidadDeTransporte,
        pais: repartidor.pais,
        unidadPropia: repartidor.unidadPropia
      });
      //-------------------------------------------------------------
  }

  // navigateRegister()
  // {
  //   this.router.navigate(["/register"],);
  // }
}


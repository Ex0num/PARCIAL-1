import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-abm-entidad2',
  templateUrl: './abm-entidad2.component.html',
  styleUrls: ['./abm-entidad2.component.css']
})
export class AbmEntidad2Component implements OnInit {

  userLoged = false;
  isAdmin = false;



  constructor() 
  { 
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => 
    {
      if (user) 
      {
        //User is loged
        this.userLoged = true;

        if (user.email == "admin@gmail.com")
        {
          this.isAdmin = true;
        }
        else
        {
          this.isAdmin = false;
        }

      } else 
      {
        // User is signed out
        this.userLoged = false;
      }
    });
  }

  ngOnInit(): void {}

  peliSeleccionada:any;
  peliAfectada = false;

  onItemSeleccionado(event:any)
  {
    // console.log("ME LLEGO EL EVENTO!!");
    // console.log(event);
    this.peliSeleccionada = event;
  }

  itemAfectado(event:any)
  {
    // console.log("ACCIONAR ME LLEGÓ!!!!");
    // console.log(this.peliAfectada);
    // console.log(event);
    
    if (this.peliAfectada == true)
    {
      this.peliAfectada = false;
    }
    else
    {
      this.peliAfectada = true;
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  userLoged = false;

  constructor() 
  { 
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => 
    {
      if (user) 
      {
        //User is loged
        this.userLoged = true;
      } else 
      {
        // User is signed out
        this.userLoged = false;
      }
    });
  }
  
  ngOnInit(): void {}

  repartidorSeleccionado:any;
  // peliAfectada = false;

  onRepartidorSeleccionado(event:any)
  {
    console.log("ME LLEGO EL EVENTO!!");
    // console.log(event);
    this.repartidorSeleccionado = event;
  }

  // peliculaAfectada(event:any)
  // {
  //   // console.log("ACCIONAR ME LLEGÓ!!!!");
  //   // console.log(this.peliAfectada);
  //   // console.log(event);
    
  //   if (this.peliAfectada == true)
  //   {
  //     this.peliAfectada = false;
  //   }
  //   else
  //   {
  //     this.peliAfectada = true;
  //   }
  // }

}

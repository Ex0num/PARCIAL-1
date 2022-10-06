import { Component, OnInit } from '@angular/core';
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

}

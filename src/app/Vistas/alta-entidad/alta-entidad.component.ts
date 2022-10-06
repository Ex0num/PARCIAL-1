import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { SrvFirebaseService } from 'src/app/Servicios/srv-firebase.service';

@Component({
  selector: 'app-alta-entidad',
  templateUrl: './alta-entidad.component.html',
  styleUrls: ['./alta-entidad.component.css']
})
export class AltaEntidadComponent implements OnInit {

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


  @Input() paisClickeado:any;

  flagNGLoading = true;
  pais:string = "";

  paisClickeadoEvent(a:any)
  {
    console.log("EVENTO EN EL MAIN RECIBIDO. REEMPLAZANDO.");
    this.pais = a["name"]["common"];
  }
  
  ngOnInit(): void {}
}

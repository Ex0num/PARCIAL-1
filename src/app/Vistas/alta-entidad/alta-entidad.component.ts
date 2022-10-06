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

  constructor(private formBuilder:FormBuilder) 
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

  forma:FormGroup | any;
  @Input() paisClickeado:any;

  flagNGLoading = true;
  pais:string = "";

  paisClickeadoEvent(a:any)
  {
    console.log("EVENTO EN EL MAIN RECIBIDO. REEMPLAZANDO.");
    this.pais = a["name"]["common"];
  }

  ngOnInit(): void 
  {

    this.forma = this.formBuilder.group({
      'nombre' : ['', [Validators.required]],
      'apellido' : ['', [Validators.required]],
      'numero' : ['', [Validators.required]],
      'edad' : ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'rol' : ['', [Validators.required]],
      'comentario' : ['', [Validators.required]],
    })
  }

  crear()
  {

    let object = this.forma?.getRawValue();

    if (object["nombre"] != "" && 
    object["apellido"] != "" &&
    object["numero"] != "" && 
    object["edad"] != "" && 
    object["rol"] != "" &&
    object["comentario"] != "" && 
    object["comentario"].lenght < 80)
    {



    }
    else
    {
      let mensajeErrorFinal = document.getElementById("error-enviando");
      mensajeErrorFinal?.removeAttribute("hidden");

      setTimeout( () => 
      {
        mensajeErrorFinal?.setAttribute("hidden","true");
      },2000)
    }

  }

}

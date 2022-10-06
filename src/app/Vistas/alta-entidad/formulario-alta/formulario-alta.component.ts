import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entidad } from 'src/app/Entidades/entidad';
import { SrvFirebaseService } from 'src/app/Servicios/srv-firebase.service';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  constructor(public srvFirebase:SrvFirebaseService, private formBuilder:FormBuilder) { }
  
  ngOnInit(): void 
  {
    this.forma = this.formBuilder.group({
      'nombre' : ['', [Validators.required]],
      'edad' : ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'dni' : ['', [Validators.required]],
      'capacidad' : ['', [Validators.required]],
    })
  }

  forma:FormGroup | any;

  @Input() paisClickeado:any;

  flagNGLoading = true;

  nombre:string = "";
  dni:number | any;
  edad:number | any;
  capacidadDeTransporte:number | any;
  pais:any;
  unidadPropia:boolean = true;

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("ME LLEGO EL EVENTO EN EL ALTA!!!!");
      this.pais = this.paisClickeado;
    }
  }

  crearEntidad()
  {
    let object = this.forma?.getRawValue();

    if (object["nombre"] != "" &&
    object["edad"] > 0 &&
    object["dni"] > 0 &&
    object["capacidad"] > 0)
    {
      let repartidor = new Entidad(this.nombre,this.dni,this.edad,this.capacidadDeTransporte,this.pais,this.unidadPropia);
      this.srvFirebase.agregarRepartidorDB(repartidor);

      this.nombre = "";
      this.edad = undefined;
      this.dni = undefined;
      this.capacidadDeTransporte = this.unidadPropia;
      this.pais = undefined;
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

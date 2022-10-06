import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entidad } from 'src/app/Entidades/entidad';
import { SrvFirebaseService } from 'src/app/Servicios/srv-firebase.service';

@Component({
  selector: 'app-listado-de-entidad',
  templateUrl: './listado-de-entidad.component.html',
  styleUrls: ['./listado-de-entidad.component.css']
})
export class ListadoDeEntidadComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public srvFirebase:SrvFirebaseService) 
  {
    this.actoresColumn1 = new Array();
    this.actoresColumn2 = new Array();
    this.srvFirebase.repartidoresDB;
    this.cargarActoresATabla();
  }


  actoresColumn1:Entidad[];
  actoresColumn2:Entidad[];

  @Output() public clickActor = new EventEmitter<any>();

  cargarActoresATabla()
  {
    this.limpiarColumnas();

    console.log("LEYENDO REPARTIDORES DB");
    console.log(this.srvFirebase.repartidoresDB);

    setTimeout( ()=>
    {
      this.srvFirebase.repartidoresDB.forEach(actorActual => 
        {
            if (this.actoresColumn1.length > this.actoresColumn2.length)
            {
              this.actoresColumn2.push(actorActual);
            }
            else if (this.actoresColumn1.length < this.actoresColumn2.length)
            {
              this.actoresColumn1.push(actorActual);
            }
            else if (this.actoresColumn1.length == this.actoresColumn2.length)
            {
              this.actoresColumn1.push(actorActual);
            }
        });
    },3500)

    console.log(this.actoresColumn1);
    console.log(this.actoresColumn2);
  }

  limpiarColumnas()
  {
    do
    {
      this.actoresColumn1.pop();

    }while(this.actoresColumn1.length >= 1)

    do
    {
      this.actoresColumn2.pop();

    }while(this.actoresColumn2.length >= 1)
  }

  repartidorClickeado(repartidorRecibido:Entidad)
  {
    console.log("UN REPARTIDOR EN LA TABLA FUE CLICKEADO");
    console.log(repartidorRecibido);

    this.clickActor.emit(repartidorRecibido);
  }

}

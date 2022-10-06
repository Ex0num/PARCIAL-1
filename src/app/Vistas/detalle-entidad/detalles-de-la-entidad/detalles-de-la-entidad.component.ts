import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Entidad } from 'src/app/Entidades/entidad';

@Component({
  selector: 'app-detalles-de-la-entidad',
  templateUrl: './detalles-de-la-entidad.component.html',
  styleUrls: ['./detalles-de-la-entidad.component.css']
})
export class DetallesDeLaEntidadComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  
  nombre:any = "";
  edad:number | any;
  capacidad:number | any;
  paisOrigen:string = "";
  unidadPropia:number | any;

  @Input() repartidorClickeado:any;

  flagNGLoading = true;

  ngOnChanges(changes: SimpleChanges): void
  {
      if (this.flagNGLoading == true)
      {
        this.flagNGLoading = false;
      }
      else
      {
        console.log("ACTOR CLICKEADO CAMBIO EN DETALLE!!!!");
        this.cargarPeliculaSeleccionada(this.repartidorClickeado);
      }
  }

  cargarPeliculaSeleccionada(peliculaRecibida:Entidad) 
  {
    // console.log("CARGANDO DETALLES DE PELICULA");

    let dataMostrable = document.getElementById("col1-detalle");
    dataMostrable?.removeAttribute("hidden");

    //-- DATA ----------------------------------------------------------
    this.nombre = peliculaRecibida.nombre;
    this.edad = peliculaRecibida.edad;
    this.capacidad = peliculaRecibida.capacidadDeTransporte;
    this.paisOrigen = peliculaRecibida.pais;
    this.unidadPropia = peliculaRecibida.unidadPropia;
    // -----------------------------------------------------------------

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }
}

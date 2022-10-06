import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Entidad } from 'src/app/Entidades/entidad';
import { SrvPaisesService } from 'src/app/Servicios/srv-paises.service';

@Component({
  selector: 'app-detalles-del-pais',
  templateUrl: './detalles-del-pais.component.html',
  styleUrls: ['./detalles-del-pais.component.css']
})
export class DetallesDelPaisComponent implements OnInit {

  constructor(public srvPaises:SrvPaisesService) { }

  ngOnInit(): void {
  }

  flagNGLoading = true;

  nombreComunPaisActor:string = "";
  regionPaisActor:string = "";
  poblacionPaisActor:number | undefined;
  banderaPaisActor:string = "";

  @Input() repartidorClickeado:any;
  dataPais:any;

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("REPARTIDOR CLICKEADO CAMBIO EN PAIS DEL REPARTIDOR!!!!");
      this.cargarDetallesPaisDelActorSeleccionado(this.repartidorClickeado);
    }
  }

  cargarDetallesPaisDelActorSeleccionado(actorSeleccionado:Entidad)
  {
    this.buscarDataPaisDelActor(actorSeleccionado.pais); 
  }

  private buscarDataPaisDelActor(nombreComunPais:string)
  {
    let pais = this.srvPaises.obtenerPais(nombreComunPais).subscribe(val => 
    {
      this.dataPais = val;
      this.nombreComunPaisActor = this.dataPais[0]["name"]["common"];
      this.regionPaisActor = this.dataPais[0]["region"];
      this.poblacionPaisActor = this.dataPais[0]["population"];
      this.banderaPaisActor = this.dataPais[0]["flag"];
      pais.unsubscribe();
    });

    return pais;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SrvPaisesService } from 'src/app/Servicios/srv-paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit
{
  constructor(public srvPaises:SrvPaisesService) {}

  arrayPaises:any[] = new Array();

  @Output() public paisClickeado = new EventEmitter<any>();

  ngOnInit(): void 
  {
    this.arrayPaises = this.srvPaises.apiPaises;
    console.log(this.arrayPaises);

    this.arrayPaises.forEach(element => {
      console.log(""); 
      console.log(element["flag"]);
      console.log(element["name"]["common"]);
      console.log(element);
      console.log("");  
    });
  }

  paisClickeadoEvent(pais:any)
  {
    console.log("ENVIANDO EVENTO");
    this.paisClickeado.emit(pais);
  }

}

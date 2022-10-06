import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-entidad2',
  templateUrl: './listado-entidad2.component.html',
  styleUrls: ['./listado-entidad2.component.css']
})
export class ListadoEntidad2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() itemListadoAfectado:any;
  @Output() public itemDelListadoClickeado = new EventEmitter<any>();

}

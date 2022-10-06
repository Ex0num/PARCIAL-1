import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() paisClickeado:any;

  flagNGLoading = true;

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("ME LLEGO EL EVENTO EN EL ALTA!!!!");
      // this.cargarPeliculaSeleccionada(this.peliClickeada);
    }
  }

  crearEntidad()
  {

  }

}

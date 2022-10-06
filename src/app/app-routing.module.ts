import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmEntidad2Component } from './Vistas/abm-entidad2/abm-entidad2.component';
import { AltaEntidadComponent } from './Vistas/alta-entidad/alta-entidad.component';
import { BienvenidaComponent } from './Vistas/bienvenida/bienvenida.component';
import { DetalleEntidadComponent } from './Vistas/detalle-entidad/detalle-entidad.component';
import { LoginComponent } from './Vistas/login/login.component';

const routes: Routes = 
[
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'login',component:LoginComponent},
  {path:'alta',component:AltaEntidadComponent},
  {path:'detalle',component:DetalleEntidadComponent},
  {path:'abm',component:AbmEntidad2Component},
  {path:'**',component:BienvenidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

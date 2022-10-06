import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './Vistas/bienvenida/bienvenida.component';
import { LoginComponent } from './Vistas/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaEntidadComponent } from './Vistas/alta-entidad/alta-entidad.component';
import { FormularioAltaComponent } from './Vistas/alta-entidad/formulario-alta/formulario-alta.component';
import { ListadoPaisesComponent } from './Vistas/alta-entidad/listado-paises/listado-paises.component';
import { DetalleEntidadComponent } from './Vistas/detalle-entidad/detalle-entidad.component';
import { DetallesDelPaisComponent } from './Vistas/detalle-entidad/detalles-del-pais/detalles-del-pais.component';
import { DetallesDeLaEntidadComponent } from './Vistas/detalle-entidad/detalles-de-la-entidad/detalles-de-la-entidad.component';
import { ListadoDeEntidadComponent } from './Vistas/detalle-entidad/listado-de-entidad/listado-de-entidad.component';
import { AbmEntidad2Component } from './Vistas/abm-entidad2/abm-entidad2.component';
import { ListadoEntidad2Component } from './Vistas/abm-entidad2/listado-entidad2/listado-entidad2.component';
import { AltaEntidad2Component } from './Vistas/abm-entidad2/alta-entidad2/alta-entidad2.component';
import { BajaEntidad2Component } from './Vistas/abm-entidad2/baja-entidad2/baja-entidad2.component';
import { ModificacionEntidad2Component } from './Vistas/abm-entidad2/modificacion-entidad2/modificacion-entidad2.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaEntidadComponent,
    FormularioAltaComponent,
    ListadoPaisesComponent,
    DetalleEntidadComponent,
    DetallesDelPaisComponent,
    DetallesDeLaEntidadComponent,
    ListadoDeEntidadComponent,
    AbmEntidad2Component,
    ListadoEntidad2Component,
    AltaEntidad2Component,
    BajaEntidad2Component,
    ModificacionEntidad2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

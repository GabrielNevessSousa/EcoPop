import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaDonarComponent } from './pagina-donar/pagina-donar.component';
import { PaginaDonarProductosComponent } from './pagina-donar-productos/pagina-donar-productos.component';
import { OngsInfoComponent } from './ongs-info/ongs-info.component';
import { PaginaDonarDineroComponent } from './pagina-donar-dinero/pagina-donar-dinero.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { PuntsComponent } from './punts/punts.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    PaginaPrincipalComponent,
    PaginaDonarComponent,
    PaginaDonarDineroComponent,
    PaginaDonarProductosComponent,
    OngsInfoComponent,
    CatalegComponent,
    PuntsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

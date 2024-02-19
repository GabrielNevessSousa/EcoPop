import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaDonarComponent } from './pagina-donar/pagina-donar.component';
import { PaginaDonarDineroComponent } from './pagina-donar-dinero/pagina-donar-dinero.component';
import { PaginaDonarProductosComponent } from './pagina-donar-productos/pagina-donar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PaginaPrincipalComponent,
    PaginaDonarComponent,
    PaginaDonarDineroComponent,
    PaginaDonarProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

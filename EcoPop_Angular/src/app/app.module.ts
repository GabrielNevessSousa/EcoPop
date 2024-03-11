import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DireccionComponent } from './direccion/direccion.component';
import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    DireccionComponent,
    ConfirmarPedidoComponent,
    RealizarPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

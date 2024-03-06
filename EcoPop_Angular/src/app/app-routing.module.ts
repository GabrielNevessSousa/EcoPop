import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';
import { DireccionComponent } from './direccion/direccion.component';
import { LoginComponent } from './login/login.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'direccion',
    component: DireccionComponent,
  },

  {
    path: 'confirmar-pedido',
    component: ConfirmarPedidoComponent,
  },

  {
    path: 'realizar-pago',
    component: RealizarPagoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

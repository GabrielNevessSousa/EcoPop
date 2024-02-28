import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalegComponent } from './cataleg/cataleg.component';
import { LoginComponent } from './login/login.component';
import { OngsInfoComponent } from './ongs-info/ongs-info.component';
import { PaginaDonarDineroComponent } from './pagina-donar-dinero/pagina-donar-dinero.component';
import { PaginaDonarProductosComponent } from './pagina-donar-productos/pagina-donar-productos.component';
import { PaginaDonarComponent } from './pagina-donar/pagina-donar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PuntsComponent } from './punts/punts.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';

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
    path: 'admin',
    component: PaginaAdminComponent,
  },

  {
  path: 'pag-principal', 
  component: PaginaPrincipalComponent 
},
{ 
  path: 'donar', 
  component: PaginaDonarComponent 
},
{ 
  path: 'donar-productos', 
  component: PaginaDonarProductosComponent 
},
{ 
  path: 'donar-dinero', 
  component: PaginaDonarDineroComponent 
},
{ 
  path: 'ongs-info', 
  component: OngsInfoComponent 
},
{ 
  path: 'punts', 
  component: PuntsComponent 
},
{ 
  path: 'usuario', 
  component: UsuarioComponent 
},

{ 
  path: 'cateleg', 
  component: CatalegComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

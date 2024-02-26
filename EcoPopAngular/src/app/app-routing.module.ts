import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaDonarComponent } from './pagina-donar/pagina-donar.component';
import { PaginaDonarDineroComponent } from './pagina-donar-dinero/pagina-donar-dinero.component';
import { PaginaDonarProductosComponent } from './pagina-donar-productos/pagina-donar-productos.component';
import { OngsInfoComponent } from './ongs-info/ongs-info.component';
import { PuntsComponent } from './punts/punts.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'pag-principal' 
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

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

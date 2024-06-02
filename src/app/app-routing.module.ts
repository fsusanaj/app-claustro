import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'publi',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'productos-clientes',
    loadChildren: () => import('./pages/productos-clientes/productos-clientes.module').then( m => m.ProductosClientesPageModule)
  },
  {
    path: 'publi',
    loadChildren: () => import('./pages/publi/publi.module').then( m => m.PubliPageModule)
  },
  {
    path: 'crear-user',
    loadChildren: () => import('./pages/crear-user/crear-user.module').then( m => m.CrearUserPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./pages/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'cuidado-personal',
    loadChildren: () => import('./pages/cuidado-personal/cuidado-personal.module').then( m => m.CuidadoPersonalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

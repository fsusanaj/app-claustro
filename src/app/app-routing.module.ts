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
  {
    path: 'jerry-vela',
    loadChildren: () => import('./pages/jerry-vela/jerry-vela.module').then( m => m.JerryVelaPageModule)
  },
  {
    path: 'jose-cervantes',
    loadChildren: () => import('./pages/jose-cervantes/jose-cervantes.module').then( m => m.JoseCervantesPageModule)
  },
  {
    path: 'zarco',
    loadChildren: () => import('./pages/zarco/zarco.module').then( m => m.ZarcoPageModule)
  },
  {
    path: 'meza',
    loadChildren: () => import('./pages/meza/meza.module').then( m => m.MezaPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'oro',
    loadChildren: () => import('./pages/oro/oro.module').then( m => m.OroPageModule)
  },
  {
    path: 'diamante',
    loadChildren: () => import('./pages/diamante/diamante.module').then( m => m.DiamantePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'investiduras',
    loadChildren: () => import('./pages/investiduras/investiduras.module').then( m => m.InvestidurasPageModule)
  },
  {
    path: 'doctores',
    loadChildren: () => import('./pages/doctores/doctores.module').then( m => m.DoctoresPageModule)
  },
  {
    path: 'doctorespodcast',
    loadChildren: () => import('./pages/doctorespodcast/doctorespodcast.module').then( m => m.DoctorespodcastPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RootModule } from './root/root.module';
import { MovieComponent } from './root/movie/movie.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movie', component: MovieComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MovieComponent } from '../root/movie/movie.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
 
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
  ,{ path: 'movie', component: MovieComponent }
  ,{ path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

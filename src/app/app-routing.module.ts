import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHeroComponent } from '../create-hero/create-hero.component';
import { CreateHeroModule } from '../create-hero/create-hero.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateHeroComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreateHeroModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroComponent } from './create-hero.component';

@NgModule({
  declarations: [
    CreateHeroComponent
  ],
  exports: [
    CreateHeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateHeroModule { }

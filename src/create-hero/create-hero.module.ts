import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroComponent } from './create-hero.component';
import { GeneratorModule } from '../generator/generator.module';

@NgModule({
  declarations: [
    CreateHeroComponent
  ],
  exports: [
    CreateHeroComponent,
  ],
  imports: [
    CommonModule,
    GeneratorModule
  ]
})
export class CreateHeroModule { }

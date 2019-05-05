import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCanvasComponent } from './hero-canvas.component';

@NgModule({
  declarations: [
    HeroCanvasComponent
  ],
  exports: [
    HeroCanvasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GeneratorModule { }

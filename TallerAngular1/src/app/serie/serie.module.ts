import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListaComponent } from './serie-lista/serie-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieListaComponent],
  declarations: [SerieListaComponent]
})
export class SerieModule { }

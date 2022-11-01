import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-lista',
  templateUrl: './serie-lista.component.html',
  styleUrls: ['./serie-lista.component.css']
})
export class SerieListaComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;
  suma: number = 0;


  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((seriex) => {
      this.series = seriex;
    });  
  }

  calcularPromedio(): void {
    this.series.forEach((serie) => {
      this.suma = this.suma + serie.seasons;
      
    });
    this.promedio = this.suma/(this.series.length);
  }

  ngOnInit() {
    this.getSeries();
    this.calcularPromedio();
  }

}

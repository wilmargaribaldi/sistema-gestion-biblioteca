import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Chart from 'chart.js/auto';
import { Libro, LibroService } from '../libro-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('graficoBarras') barrasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('graficoDona') donaRef!: ElementRef<HTMLCanvasElement>;

  chartBarras?: Chart;
  chartDona?: Chart;

  constructor(private libroService: LibroService) {}

  ngAfterViewInit(): void {
    const libros = this.libroService.obtenerLibros();

    this.dibujarGraficoBarras(libros);
    this.dibujarGraficoDona(libros);
  }

  ngOnDestroy(): void {
    this.chartBarras?.destroy();
    this.chartDona?.destroy();
  }

  dibujarGraficoBarras(libros: Libro[]) {
    const categorias = ['Programación', 'Bases de Datos', 'Redes', 'Ciencias Básicas'];
    const disponiblesPorCategoria = categorias.map((cat) =>
      libros.filter((libro) => libro.categoria === cat).reduce((suma, libro) => suma + libro.disponibles, 0),
    );

    this.chartBarras = new Chart(this.barrasRef.nativeElement, {
      type: 'bar',
      data: {
        labels: categorias,
        datasets: [
          {
            label: 'Unidades disponibles',
            data: disponiblesPorCategoria,
            backgroundColor: ['#3f51b5', '#ff4081', '#4caf50', '#ff9800'],
            borderRadius: 6,
          },
        ],
      },
      options: { responsive: true, plugins: { legend: { display: false } } },
    });
  }

  dibujarGraficoDona(libros: Libro[]) {
    const cantStockCritico = libros.filter((libro) => libro.disponibles < 10).length;
    const cantStockSaludable = libros.length - cantStockCritico;

    this.chartDona = new Chart(this.donaRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Stock Crítico', 'Stock Saludable'],
        datasets: [
          {
            data: [cantStockCritico, cantStockSaludable],
            backgroundColor: ['#f44336', '#4caf50'],
            borderWidth: 2,
          },
        ],
      },
      options: { responsive: true },
    });
  }
}

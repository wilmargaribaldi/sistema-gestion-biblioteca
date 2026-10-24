import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Libro } from '../libro-service';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatButtonModule, RouterLink],
  templateUrl: './tabla-libros.html',
  styleUrl: './tabla-libros.css',
})
export class TablaLibrosComponent {
  @Input() set lista(value: Libro[]) {
    this.dataSource.data = value;
  }

  columnas: string[] = ['id', 'titulo', 'autor', 'categoria', 'disponibles', 'acciones'];
  dataSource = new MatTableDataSource<Libro>([]);
}

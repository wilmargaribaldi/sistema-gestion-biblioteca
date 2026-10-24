import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TablaLibrosComponent } from '../tabla-libros/tabla-libros';
import { Libro, LibroService } from '../libro-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, TablaLibrosComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  categorias: string[] = ['Todas', 'Programación', 'Bases de Datos', 'Redes', 'Ciencias Básicas'];
  librosEnPantalla: Libro[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.librosEnPantalla = this.libroService.obtenerLibros();
  }

  filtrarPorCategoria(categoria: string) {
    this.librosEnPantalla = this.libroService.buscarPorCategoria(categoria);
  }
}

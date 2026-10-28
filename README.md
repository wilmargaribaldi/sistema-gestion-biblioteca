# Sistema de gestión de biblioteca - UNSA

Catálogo de libros de la biblioteca de la facultad, hecho con Angular 21 (standalone components) y Angular Material.

## Arquitectura

- `LibroService` (`src/app/libro-service.ts`): catálogo estático de libros. Permite obtener todo el catálogo, filtrar por categoría y buscar un libro por su código.
- `HomeComponent`: filtro por categoría y lista filtrada que pasa a su hijo.
- `TablaLibrosComponent`: recibe la lista por `@Input()` y la muestra en una `mat-table`.
- `DetalleLibroComponent`: lee el `id` de la URL (`/libro/:id`) y muestra la ficha del libro.
- `App` (App Shell): barra superior `mat-toolbar` con los botones "Catálogo" (`/`) y "Dashboard" (`/dashboard`), y el `router-outlet` debajo.
- `DashboardComponent`: panel de reportabilidad con Chart.js. Toma los datos de `LibroService` y los transforma con `map`, `filter` y `reduce` para dibujar un gráfico de barras (unidades disponibles por categoría) y una dona (stock crítico, menos de 10 unidades, frente a saludable).

## Comandos

```bash
npm install
npm start
npm run build
```

La aplicación queda disponible en `http://localhost:4200/`.

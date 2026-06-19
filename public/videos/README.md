# Videos del hero (carrusel)

La home muestra un **carrusel de 3 videos** de fondo. Coloca aquí los archivos
con estos nombres exactos:

```
hero-1.mp4
hero-2.mp4
hero-3.mp4
```

> Puedes cambiar los nombres o la cantidad editando el arreglo `videos` en
> `app/page.js`. Si dejas un solo video, el hero lo reproduce en loop.

## Cómo funciona el carrusel

- Cada video se reproduce una vez y avanza al siguiente con un fundido suave.
- Hay un respaldo por tiempo (~9 s) por si un video no dispara el evento `ended`.
- Los puntos en la parte inferior permiten saltar a un video específico.
- Respeta la preferencia de "reducir movimiento" del sistema.

## Recomendaciones de rendimiento

- Formato: `.mp4` (H.264) comprimido.
- Duración ideal: 8 a 15 segundos cada uno.
- Resolución sugerida: 1920×1080 (o 1280×720 para menor peso).
- Peso objetivo: menos de ~4 MB por video (son lo primero que carga la home).
- Sin audio (se reproducen silenciados).

Ideas de contenido: persianas abriéndose, luz natural entrando por una ventana,
detalle de telas blackout/screen, instalación profesional o antes/después.

Mientras no existan los archivos, el hero mostrará el `poster`
(`/public/images/hero-fallback.jpg`) y el overlay oscuro.

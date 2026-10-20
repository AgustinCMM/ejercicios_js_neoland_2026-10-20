# Ejercicios · Variables, condicionales y switch

Proyecto de práctica de JavaScript de la **Clase 6 (2026-10-20)**. Reúne los 10 ejercicios
asignados al **Grupo Avanzado B**, organizados en carpetas independientes con su consigna,
sus estilos y su archivo de script listo para completar.

Cada ejercicio está **sin resolver**: el HTML muestra únicamente la consigna y el
`script.js` queda listo para escribir la solución. En los ejercicios de lectura, el
script incluye el código de partida que aparece en la consigna.

## Rutas del proyecto

```text
Ejercicios/
├── index.html                         ← portal con acceso a los 10 ejercicios
├── README.md
├── assets/
│   └── css/
│       └── style.css                 ← estilos del portal
├── variables condicionales y switch.docx
├── 01-servidores/
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   └── styles.css
│       └── js/
│           └── script.js
├── 02-precios-acciones/
├── 03-login-anidado/
├── 04-rectangulo/
├── 05-suma-posiciones/
├── 06-shadowing-ambito/
├── 07-arrays-matematica/
├── 08-cortocircuito/
├── 09-codigo-inalcanzable/
└── 10-condiciones-redundantes/
```

Cada una de las 10 carpetas repite la misma estructura:

| Archivo | Función |
|---------|---------|
| `index.html` | Consigna y estructura de la página. |
| `assets/css/styles.css` | Hoja de estilos base del ejercicio. |
| `assets/js/script.js` | Archivo de trabajo del ejercicio. |

Cada ejercicio es autocontenido: su HTML, sus estilos y su script viven dentro de su
propia carpeta y no dependen de los demás.

## Cómo ejecutar

No requiere instalación, dependencias ni servidor.

1. Abrí `index.html` en el navegador para ver el portal de ejercicios.
2. Entrá al ejercicio que quieras resolver.
3. Editá el archivo `assets/js/script.js` de esa carpeta.
4. Presioná **F12 → Console** para ver tus `console.log()`.

Opcional: si usás VS Code, podés abrir la carpeta del proyecto con **Live Server**.

## Ejercicios

### Lógica, matemáticas y estructuras

| # | Ejercicio | Ruta | Tema |
|---|-----------|------|------|
| 01 | Estado de los servidores | `01-servidores/` | Arrays · Booleanos · `!` |
| 02 | Precios de acciones | `02-precios-acciones/` | Arrays · Comparaciones · `&&` |
| 03 | Inicio de sesión | `03-login-anidado/` | `if` anidado · `switch` |
| 04 | Rectángulo | `04-rectangulo/` | Objetos · `if/else` · Área |
| 05 | Suma de posiciones | `05-suma-posiciones/` | Arrays · `if/else` · División |

### Lectura de código y detección de bugs

| # | Ejercicio | Ruta | Tema |
|---|-----------|------|------|
| 06 | Shadowing y ámbito | `06-shadowing-ambito/` | Lectura · Ámbito de `let` |
| 07 | Interpretación matemática de Arrays | `07-arrays-matematica/` | Lectura · Índices |
| 08 | Evaluación cortocircuito | `08-cortocircuito/` | Lectura · `&&` |
| 09 | Código inalcanzable | `09-codigo-inalcanzable/` | Lectura · Flujo `if/else if` |
| 10 | Condiciones redundantes | `10-condiciones-redundantes/` | Lectura · Refactor |

## Convenciones del proyecto

- **HTML**: la consigna está siempre visible dentro de la página, sin indicaciones
  adicionales.
- **Rutas**: cada página enlaza `assets/css/styles.css` y `assets/js/script.js`
  con rutas relativas a su propia carpeta.
- **JS**: el `<script>` se carga al final del `<body>`.
- **CSS**: cada ejercicio tiene su hoja de estilos dentro de su carpeta `assets/`,
  independiente del resto.
- **Salida**: los resultados se muestran en la consola del navegador con `console.log()`.
  En los ejercicios de lectura, `print()` del material equivale a `console.log()`.
- **Solo consigna**: no se agregan pasos, pistas, preguntas extra ni soluciones.

## Detalles y mantenimiento

- Los ejercicios 6 a 10 son de lectura: el código a analizar se muestra en la consigna
  y también está cargado en `assets/js/script.js`.
- La estructura es fija: un directorio por ejercicio, con `index.html` y `assets/`
  (que contiene `css/styles.css` y `js/script.js`).
- Para agregar un ejercicio nuevo: duplicar una carpeta, renombrarla con el prefijo
  numérico correspondiente, actualizar su `index.html` y sumar la tarjeta en el portal.
- El documento original con todas las consignas se conserva en
  `variables condicionales y switch.docx`.

## Autor

**Agustín Massa** · Grupo Avanzado B · Neoland

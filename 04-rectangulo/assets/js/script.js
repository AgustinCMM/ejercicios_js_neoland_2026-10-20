/* ============================================================
   Ejercicio 04 · Rectángulo
   ------------------------------------------------------------
   Tienes el JSON:
       let rectangulo = { ancho: 10, alto: 20 };

   Escribe un condicional if/else que calcule el área (ancho por
   alto). Si el área es exactamente 200, cambia el ancho a 15 y
   el alto a 10.
   ============================================================ */

let rectangulo = { ancho: 10, alto: 20 };
let area = rectangulo.ancho * rectangulo.alto;

console.log("Rectángulo inicial:", rectangulo);
console.log("Área inicial:", area);

if (area === 200) {
  rectangulo.ancho = 15;
  rectangulo.alto = 10;
  area = rectangulo.ancho * rectangulo.alto;
} else {
  console.log("El área no es 200, no se modifica.");
}

console.log("Rectángulo final:", rectangulo);
console.log("Área final:", area);
/* ============================================================
   Ejercicio 02 · Precios de acciones
   ------------------------------------------------------------
   Crea un Array de precios de acciones en bolsa: [150, 160, 155].
   Escribe una condición que evalúe si el precio de la posición 2
   es mayor que el de la posición 1 AND mayor que el de la 0.
   ============================================================ */

const accionesBolsa = [150, 160, 155];

console.log("Valores de acciones: " + accionesBolsa);

if (accionesBolsa[2] > accionesBolsa[1] && accionesBolsa[2] > accionesBolsa[0]) {
   console.log("Las acciones de la posisción 2 son mayores que las de la posición 1 y la posición 0");
} else {
   console.log("Las acciones de la posisción 2 NO son mayores que las de la posición 1 y la posición 0");
}
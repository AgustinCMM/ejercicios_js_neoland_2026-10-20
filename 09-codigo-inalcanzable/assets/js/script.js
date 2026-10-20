/* ============================================================
   Ejercicio 09 · Código inalcanzable
   ------------------------------------------------------------
   Código inalcanzable (Unreachable Code): Explica por qué a x
   nunca se le asignará el valor 30, sin importar si empezamos con
   un 15, un 50 o un 100.
   ============================================================ */

let x = 15;
if (x > 5) { x = 20; }
else if (x > 10) { x = 30; }

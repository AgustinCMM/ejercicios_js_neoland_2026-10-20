/* ============================================================
   Ejercicio 08 · Evaluación cortocircuito
   ------------------------------------------------------------
   Evaluación Cortocircuito: Explica por qué el programa no se
   rompe matemáticamente al intentar dividir por 0 en este caso
   específico.
   ============================================================ */

let divisor = 0;
if (divisor != 0 && (100 / divisor) > 5) { console.log("Válido"); }

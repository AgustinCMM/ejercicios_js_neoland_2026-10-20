/* ============================================================
   Ejercicio 08 · Evaluación cortocircuito
   Grupo Avanzado B · Agustín Massa
   ------------------------------------------------------------
   CONSIGNA
   Explicá por qué el programa no se rompe matemáticamente al
   intentar dividir por 0 en este caso específico.

       let divisor = 0;
       if (divisor != 0 && (100 / divisor) > 5) {
           print("Válido");
       }

   OBJETIVOS
   - Entender la evaluación cortocircuito de &&.
   - Razonar sobre el orden de las condiciones.

   NOTA
   - En el navegador usamos console.log() en lugar de print(),
     que es el que aparece en el material.
   ============================================================ */

let divisor = 0;
if (divisor != 0 && (100 / divisor) > 5) {
    console.log("Válido");
}

/* ✍️ TU EXPLICACIÓN
   1) ¿En qué orden se evalúan los operandos de &&?

   2) Si el primero es false, ¿se evalúa la división? ¿Por qué?

   3) ¿Qué pasaría si la división estuviera primero en la condición?
*/

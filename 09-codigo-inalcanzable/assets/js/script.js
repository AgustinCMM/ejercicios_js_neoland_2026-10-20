/* ============================================================
   Ejercicio 09 · Código inalcanzable
   Grupo Avanzado B · Agustín Massa
   ------------------------------------------------------------
   CONSIGNA
   Explicá por qué a x nunca se le asignará el valor 30, sin
   importar si empezamos con un 15, un 50 o un 100.

       let x = 15;
       if (x > 5) { x = 20; }
       else if (x > 10) { x = 30; }

   OBJETIVOS
   - Entender el flujo de una cadena if / else if.
   - Detectar ramas inalcanzables.

   ============================================================ */

let x = 15;
if (x > 5) {
    x = 20;
} else if (x > 10) {
    x = 30;
}

/* ✍️ TU EXPLICACIÓN
   1) ¿Qué condición se evalúa primero y cuál después?

   2) ¿Puede ejecutarse la rama del else if? ¿Por qué?

   3) ¿Qué valor toma x con 15, con 50 y con 100?
*/

// TODO: comprobá tu respuesta con console.log(x).

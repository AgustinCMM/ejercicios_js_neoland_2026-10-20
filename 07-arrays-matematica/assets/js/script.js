/* ============================================================
   Ejercicio 07 · Interpretación matemática de Arrays
   Grupo Avanzado B · Agustín Massa
   ------------------------------------------------------------
   CONSIGNA
   ¿Cuál es el resultado exacto que se imprime?

       let valores = [2, 4, 6];
       valores[1] = valores[0] * valores[2];
       print(valores[1]);

   OBJETIVOS
   - Leer paso a paso una asignación con índices.
   - Entender el orden de evaluación de una expresión.

   NOTA
   - En el navegador usamos console.log() en lugar de print(),
     que es el que aparece en el material.
   ============================================================ */

let valores = [2, 4, 6];
valores[1] = valores[0] * valores[2];
console.log(valores[1]);

/* ✍️ TU EXPLICACIÓN
   1) ¿Qué valor tiene cada posición antes de la reasignación?

   2) ¿Qué número queda en valores[1] y por qué?

   3) ¿Se modifica alguna otra posición del Array?
*/

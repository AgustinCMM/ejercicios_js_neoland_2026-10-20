/* ============================================================
   Ejercicio 10 · Condiciones redundantes
   Grupo Avanzado B · Agustín Massa
   ------------------------------------------------------------
   CONSIGNA
   El código funciona, pero no es la forma en la que un
   profesional lo escribiría. ¿Cómo reescribirías esto para que
   sea directo y limpio?

       let esAdmin = true;
       if (esAdmin == true) { print("Panel principal"); }

   OBJETIVOS
   - Detectar comparaciones redundantes con booleanos.
   - Refactorizar sin cambiar el comportamiento.

   NOTA
   - En el navegador usamos console.log() en lugar de print(),
     que es el que aparece en el material.
   ============================================================ */

let esAdmin = true;
if (esAdmin == true) {
    console.log("Panel principal");
}

/* ✍️ TU EXPLICACIÓN
   1) ¿Qué devuelve esAdmin == true si esAdmin ya es un booleano?

   2) ¿Cómo se escribe la condición de forma directa?
*/

// TODO: reescribí el if con la versión mejorada.
// TODO: comprobá que el programa se comporta igual.

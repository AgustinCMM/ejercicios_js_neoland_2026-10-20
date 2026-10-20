/* ============================================================
   Ejercicio 06 · Shadowing y ámbito
   Grupo Avanzado B · Agustín Massa
   ------------------------------------------------------------
   CONSIGNA
   ¿Qué valor tiene z en la última línea del código?
   Explicá a tu pareja qué pasa con la variable w.

   OBJETIVOS
   - Entender el ámbito (scope) de bloque de let.
   - Diferenciar reasignación de declaración.

   ============================================================ */

let z = 5;
if (true) {
    z = 10;
    let w = 2;
}
z = z * 2;

/* ✍️ TU EXPLICACIÓN
   1) ¿Qué valor tiene z en la última línea? ¿Por qué?

   2) ¿Qué pasa con w al salir del bloque if?

   3) ¿Qué ocurre si usás w en la última línea?
*/

// TODO: comprobá tu respuesta con console.log().

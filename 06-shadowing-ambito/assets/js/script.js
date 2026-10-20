/* ============================================================
   Ejercicio 06 · Shadowing y ámbito
   ------------------------------------------------------------
   Shadowing / Ámbito: ¿Qué valor tiene z en la última línea del
   código? Explica a tu pareja qué pasa con la variable w.
   ============================================================ */

let z = 5;
if (true) {
    z = 10;
    let w = 2;
}
z = z * 2;

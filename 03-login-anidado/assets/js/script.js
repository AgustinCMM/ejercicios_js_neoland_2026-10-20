/* ============================================================
   Ejercicio 03 · Inicio de sesión
   ------------------------------------------------------------
   Simula un inicio de sesión matemático. Un if anidado: Primero
   verifica si intentos es menor a 3. Solo si lo es, dentro haz
   un switch que verifique un codigo numérico. Si es 1234 imprime
   "Acceso", en el default imprime "Fallo".
   ============================================================ */

let intentos = 0;
let codigo = "1234";

if (intentos < 3) {
   switch (codigo) {
      case '1234':
         console.log("Acceso");
         break;
      default:
         console.log("Fallo");
   }
   intentos++;
} else {
   console.log("Ha superado el límite de intentos de inicio de sesión");
}

console.log("Intentos de inicio de sesión: " + intentos);
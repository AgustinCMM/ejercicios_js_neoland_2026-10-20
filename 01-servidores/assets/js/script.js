/* ============================================================
   Ejercicio 01 · Estado de los servidores
   ------------------------------------------------------------
   Tienes un Array de booleanos representando el estado de 3
   servidores: [true, false, true]. Cambia el valor del servidor
   del medio a su inverso lógico (usando el operador !).
   ============================================================ */

const servidores = [true, false, true];

console.log("Estado inicial de los servidores: " + servidores);

servidores[1] = !servidores[1];

console.log("Servidores despues del operador !: " + servidores);
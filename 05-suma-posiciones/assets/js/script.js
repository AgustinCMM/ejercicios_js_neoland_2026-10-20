/* ============================================================
   Ejercicio 05 · Suma de posiciones
   ------------------------------------------------------------
   Crea un Array con 3 números. Crea una lógica con if/else que
   verifique la suma de la posición 0 y la posición 2. Si la suma
   es mayor a 50, divide la posición 1 a la mitad.
   ============================================================ */


let numeros = [45, 60, 20];
let suma = numeros[0] + numeros[2];

console.log("Números iniciales:", numeros);

if (suma > 50) {
   numeros[1] = numeros[1] / 2;
   console.log("La suma de la posición 0 y la posición 2 es mayor a 50. La posición 1 se divide a la mitad");
} else {
   console.log("La suma de la posición 0 y la posición 2 NO es mayor a 50. La posición 1 se mantiene igual");
}

console.log("Números finales:", numeros);
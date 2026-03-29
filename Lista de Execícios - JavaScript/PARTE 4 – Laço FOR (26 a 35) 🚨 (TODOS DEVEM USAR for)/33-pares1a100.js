//33. Conte quantos números pares existem entre 1 e 100.

let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        contador++;
    }

}
console.log("a quantidade de números PARÉS entre 1 e 100 é:",contador);

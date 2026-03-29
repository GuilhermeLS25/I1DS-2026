//49. Conte quantos valores são maiores que 10.

var matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18],
];
console.table(matriz);
let contador = 0;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (matriz[l][c] > 10) {
            contador++;
        }
    }
}

console.log("-------------------------------------------------------------");
console.log("-> O total de Números que são maiores do que 10 é:", contador);
console.log("-------------------------------------------------------------");

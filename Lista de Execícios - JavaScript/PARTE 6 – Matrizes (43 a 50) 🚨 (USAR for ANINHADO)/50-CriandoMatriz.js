/****************************************
50. Crie uma matriz e exiba no formato:
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]
*****************************************/

var matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18],
];
console.table(matriz);

let acumulador = 0;

for (let l = 0; l < matriz.length; l++) {
    let linha = "[ ";
    for (let c = 0; c < matriz[l].length; c++) {
        linha = linha + matriz[l][c] + " ";
    }
    linha = linha + "]";
    console.log(linha);
}

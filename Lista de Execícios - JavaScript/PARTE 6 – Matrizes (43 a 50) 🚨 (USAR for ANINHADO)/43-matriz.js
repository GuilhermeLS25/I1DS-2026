//43. Crie uma matriz 3x3 e exiba todos os valores.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Posição [", i, ",", j, "] =", matriz[i][j]);
        
    }
}
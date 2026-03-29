// 38. Calcule a média do vetor.

var num = [];

for (let i = 1; i <= 10; i++) {
    num.push(i);
}

let soma = 0;

for (let i = 0; i < num.length; i++) {
    soma += num[i];
}

let media = soma / 10;

console.log("-> A média dos números do Vetor é:", media);

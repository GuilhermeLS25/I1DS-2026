//39. Encontre o maior valor do vetor.

var num = [5, 6, 9, 7, 4, 1];
let maior = num[0];

for (let i = 0; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i];
    }
}

console.log("-----------------------------------------------------------");
console.log("-> O número", maior, "é maior que todos os outros números!");
console.log("-----------------------------------------------------------");

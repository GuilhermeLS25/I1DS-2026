//40. Encontre o menor valor do vetor.

var num = [5, 8, 9, 4, 7, 1, 10];
let menor = num[0];

for (let i = 0; i < num.length; i++) {
    if (num[i] < menor) {
        menor = num[i];
    }
}

console.log("----------------------------------------------");
console.log("O número", menor, "é o menor valor do Vetor!!");
console.log("----------------------------------------------");

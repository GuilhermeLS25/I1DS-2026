//37. Calcule a soma dos elementos do vetor.

var num = [];

for (let i = 1; i <= 10; i++) {
    num.push(i);
}

let soma = 0;

for (let i = 0; i < num.length; i++) {
    soma += num[i]; 
}

console.log("-> A soma de todos os números do Vetor é:", soma);
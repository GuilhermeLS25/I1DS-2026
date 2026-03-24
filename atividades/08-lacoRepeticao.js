//Dado um vetor, calcule e exiba a quantidade de pares e de impares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let par = 0;
let impar = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) par++;
  else impar++;
}

console.log("quantidade de pares:", par);
console.log("quantidade de impares:", impar);

// Dado o vetor, multiplique todos os seus elementos por 3
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}

console.table(numeros);

// Dada uma matriz 2x3, imprime
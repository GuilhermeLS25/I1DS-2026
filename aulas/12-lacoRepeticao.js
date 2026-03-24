//laço de Repetição - FOR (PARA)
//O professor to colocou de castigo e pediu para você escrever mil vezes a frase
//"Eu vou pestar atenção às aulas e anotar tudo"

//let i = 0 => primeiro utilizo uma variavel de controle
//i < 1000 => condição da Repetição
//i++ => aumenta a variavel de controle para não travar e somar
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou pestar atenção às aulas e anotar tudo");
}

console.log("-------------------------------------------------------");
//Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("-------------------------------------------------------");

//Escreva todos os números Pares entre 1 e 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("-------------------------------------------------------");

//dado um vetor  [Array] cacule e exiba a somatoria de seus elementos
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

// numeros.length => mostra a quantidade de itens do Array
console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma);

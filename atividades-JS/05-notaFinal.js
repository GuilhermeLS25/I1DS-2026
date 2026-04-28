/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

// Verificação de aprovação

function vericacao(nota) {
  let frase;
  if (nota < 5) {
    frase = "REPROVADO!!";
  } else if (nota > 5 && nota < 6.9) {
    frase = "Recuperação";
  } else {
    frase = "APROVADO!!";
  }
  return frase;
}

let nota = 8;
console.log("Você está: ", vericacao(nota));

/**********************************
14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5)
       
**********************************/

let nota = 8;

if (nota >= 7) {
    
    console.log("------------------------");
    console.log("-> O aluno foi APROVADO!");
    console.log("------------------------");

} else if (nota >= 5 && nota < 7) {

    console.log("-------------------------------");
    console.log("-> O aluno está de RECUPERAÇÃO!");
    console.log("-------------------------------");

} else {

    console.log("--------------------------");
    console.log("-> O aluno está REPROVADO!");
    console.log("--------------------------");

}

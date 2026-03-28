//15. Verifique se uma pessoa pode votar (use regras reais).

let idade = 17;

if (idade >= 18 && idade <= 70){

    console.log("---------------------------");
    console.log("-> Seu Voto é OBRIGATORIO!!");
    console.log("---------------------------");

} else if (idade >= 16 || idade >= 70) {

    console.log("--------------------------------------");
    console.log("-> Seu voto é FACULTATIVO!!(OPCIONAL).");
    console.log("--------------------------------------");

} else {

    console.log("------------------------------");
    console.log("-> Você ainda NÃO pode Votar!!");
    console.log("------------------------------");
}
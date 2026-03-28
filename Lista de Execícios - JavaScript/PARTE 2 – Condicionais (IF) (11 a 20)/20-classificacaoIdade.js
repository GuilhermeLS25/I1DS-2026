/*************************
20. Classifique a idade:
    -Criança
    -Adolescente
    -Adulto
    -Idoso.
**************************/

let idade = 18;

if (idade >= 60) {

    console.log("------------------------------------");
    console.log("-> Você é classificado como: IDOSO!!");
    console.log("------------------------------------");

} else if (idade >= 18) {

    console.log("-------------------------------------");
    console.log("-> Você é classificado como: ADULTO!!");
    console.log("-------------------------------------");

} else if (idade >= 12) {

    console.log("------------------------------------------");
    console.log("-> Você é classificado como: ABORRECENTE!!");
    console.log("------------------------------------------");

} else {

    console.log("--------------------------------------");
    console.log("-> Você é classificado como: CRIANÇA!!");
    console.log("--------------------------------------");

}

//19. Verifique o maior entre três números.

let num1 = 1;
let num2 = 1;
let num3 = 1;

if (num1 > num2 && num1 > num3) {

    console.log("----------------------------------------------");
    console.log("-> O número", num1,"é maior que", num2,"e",num3);
    console.log("----------------------------------------------");

} else if (num2 > num1 && num2 > num3) {

    console.log("----------------------------------------------");
    console.log("-> O número", num2,"é maior que", num1,"e",num3);
    console.log("----------------------------------------------");

} else if (num3 > num1 && num3 > num2) {

    console.log("----------------------------------------------");
    console.log("-> O número", num3,"é maior que", num1,"e",num2);
    console.log("----------------------------------------------");

} else {

    console.log("---------------------------------");
    console.log("-> !! Os números são IGUAIS !! <-");
    console.log("---------------------------------");

}

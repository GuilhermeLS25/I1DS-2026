//32. Exiba a tabuada de um número.

let num = 24;

console.log("============================");
console.log("->      TABUADA DO", num,"     <-");
console.log("============================");

for (let i = 1; i <= 10; i++){
    let r = num * i;
    console.log(num, "x", i, "=", r);
}

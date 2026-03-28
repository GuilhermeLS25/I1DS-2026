//17. Crie um sistema de login simples (usuário e senha).

const user = "admin";
const password = "12345";

let usuario = "Guilherme";
let senha = "250908";

if (usuario == user && senha == password) {

    console.log("------------------------------------------");
    console.log("-> Bem-Vindo, Login Realizado com Sucesso!");
    console.log("------------------------------------------");

} else {

    console.log("-------------------------");
    console.log("-> !! Acesso Negado !! <-");
    console.log("-------------------------");

}

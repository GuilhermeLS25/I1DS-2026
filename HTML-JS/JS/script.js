function OlaMundo() {
  alert("Ola Mundo");
}
/* 
  const OlaMundo = () => {
    alert("Ola Mundo");
  };
*/

const mudarTexto = () => {
  // Criar uma variavel para armazenar o elemento do documento

  let elementoAlvo = document.getElementById("texto");

  elementoAlvo.innerHTML = "Novo Texto com javaScript";
  elementoAlvo.style.color = "white";
  elementoAlvo.style.backgroundColor = "black";
};

const enviarNome = () => {
  let nomeDigitado = document.getElementById("nome").value;
  alert("Olá " + nomeDigitado);

  /*
    let nomeDigitado = document.getElementsByName.value;
    alert("ola" + nomeDigitado);
  */
};

const somar = () => {
  
};

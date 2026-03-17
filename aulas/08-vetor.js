// Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranosauro Rex", "Estegossauro", "Brontossauro"];

// Imprimindo os dados em forma de linha
console.log(dinos);

// Imprimindo os dados em forma de tabela
console.table(dinos);

// lenght -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O vetor tem", dinos.length, "elementos");

// Imprimir elemento apartir do indice
console.log(dinos[2]);

// push -> Adiciona um novo elementos no final da final
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O vetor tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da final
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O vetor tem", dinos.length, "elementos");

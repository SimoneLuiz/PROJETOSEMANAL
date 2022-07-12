import readline from "readline";

var leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var lista = Array();

leitura.question("Insira as propriedade CSS para a lista:\n", function(answer) {
    lista.push(answer);
    leitura.setPrompt(`${answer} foi adicionado a lista. Mais algum? Se não, digite "sair".\n`)
    leitura.prompt()
});

leitura.on('line', (entrada) => {

if (entrada.toLowerCase() === "sair") {
    console.log(lista.sort());
    leitura.close();
} else {
    lista.push(entrada)
    console.log(`${entrada} foi adicionado a lista. Mais algum? Se não, digite "sair".`)
}
  
})
/* Crie uma função chamada contarAte(numero), que 
recebe um número inteiro positivo e exibe na tela 
a contagem de 1 até esse número.*/

function contarAte(numero) {
    if(typeof numero !== "number" || numero <= 0) {
        console.log("Numero invalido! Digite um numero inteiro positivo.");
        return;
    }

    let contagem = " ";
    for (let i = 1; i <= numero; i++) {
        contagem += i + " ";
    }
    console.log(contagem.trim());
}

let numeroSelecionado = parseInt(prompt("Numero para contagem progressiva: "));
contarAte(numeroSelecionado);
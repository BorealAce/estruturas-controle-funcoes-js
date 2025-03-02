/* Crie uma função chamada listarPares(limite), que 
recebe um número e exibe todos os números pares de 0 até esse número.*/

function listarPares(limite) {
    if (typeof limite !== "number" || limite <=0) {
        console.log("Digite um numero inteiro valido.");
        return;
    }

    contagemPar = " ";
    for (let i = 0; i <= limite; i += 2) {
        contagemPar += i + " ";
    }
    console.log(contagemPar.trim());
}

let numeroPar = parseInt(prompt("Liste os numeros pares ate esse numero: "));
listarPares(numeroPar);
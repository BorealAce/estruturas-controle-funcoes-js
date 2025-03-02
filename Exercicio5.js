/*Crie uma função chamada filtrarPalavrasCurtas(lista), 
que recebe um array de palavras e retorna um novo array 
apenas com as palavras que têm menos de 5 letras.*/

function filtrarPalavrasCurtas(lista) {
    if (!Array.isArray(lista)){
        console.log("Informe um array de palavras!");
        return;
    }

    let palavrasCurtas = [];
    lista.forEach(palavra => {
        if (palavra.lenght < 5) {
            palavrasCurtas.push(palavra);
        }
    });
    return palavrasCurtas;
}

console.log(filtrarPalavrasCurtas(["casa", "armario", "cama", "carro", "piscina"]));
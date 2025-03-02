/* Crie uma função chamada classificarIdade(idade), que 
recebe a idade de uma pessoa e classifica conforme as faixas etárias*/

function classificarIdade(idade) {
    if (typeof idade !== "number" || idade <= 0) {
        console.log("Idade Invalida");
        return;
    }
    
    if (idade<12) {
        console.log("Criança.");
    }
    else if (idade<18) {
        console.log("Adolescente.");
    }
    else if (idade<=59) {
        console.log("Adulto.");
    }
    else {
        console.log("Idoso.");
    }
}

let idadeUsuario = parseInt(prompt("Digite sua idade: "));
classificarIdade(idadeUsuario);
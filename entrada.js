import readline from "readline-sync";


export function  perguntarTexto(mensagem) {

    while (true) {
        const pergunta = readline.question(mensagem)

        if (pergunta.trim() === "") {
            console.log("A entrada não pode estar vazia.")
            continue
        }

        return pergunta.trim()
    }
}

export function perguntarNumero(mensagem) {
    while (true) {
        const numero = Number(perguntarTexto(mensagem));

        if (Number.isNaN(numero)) {
            console.log("Digite um número válido.");
            continue;
        }

        return numero;
    }
}


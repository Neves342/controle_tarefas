import { perguntarTexto, perguntarNumero } from './entrada.js';

export const tarefas = [];

export function escolhaPrioridade() {
    let prioridade;

    while (true) {
        console.log("Escolha de prioridade");
        console.log("1 - Baixa");
        console.log("2 - Média");
        console.log("3 - Alta");

        let escolha = perguntarNumero("Escolha uma opcao: ");

        if (escolha === 1) {
            prioridade = "Baixa";
            break;
        } else if (escolha === 2) {
            prioridade = "Média";
            break;
        } else if (escolha === 3) {
            prioridade = "Alta";
            break;
        } else {
            console.log("opcao invalida");
        }
    }

    return prioridade;
}



export function cadastrarTarefa() {
    const nome = perguntarTexto("titulo da tarefa: ")
    const descricao = perguntarTexto("descricao da tarefa: ")
    const responsavel = perguntarTexto("responsavel pela tarefa: ")
    const prioridade = escolhaPrioridade()

    if (!nome.trim()) {
        console.log("titulo não pode estar vazio");
        return
        
    }

    if (!descricao.trim()) {
        console.log("a descricao não pode ficar vazia");
        return
    }

    if (!responsavel.trim()) {
        console.log("responsavel não pode estar vazio");
        return
    }

    const tarefa =  {
        id: tarefas.length + 1,
        titulo: nome,
        descricao: descricao,
        responsavel: responsavel,
        prioridade: prioridade,
        status: "pendente"
    }

    tarefas.push(tarefa)
    


}


export function listarTarefa() {

    if (tarefas.length === 0) {
        console.log("não existem tarefas cadastradas");
        return;
    }

    tarefas.forEach((tarefa) => {
        console.log("id:", tarefa.id);
        console.log("titulo:", tarefa.titulo);
        console.log("descricao:", tarefa.descricao);
        console.log("responsavel:", tarefa.responsavel);
        console.log("prioridade:", tarefa.prioridade);
        console.log("status:", tarefa.status);
    })}

export function buscarTarefaPorId(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        return null;
    }

    return tarefaEncontrada;
}

export function atualizarStatus(id) {
    const tarefa = buscarTarefaPorId(id);

    if (!tarefa) {
        console.log("tarefa não encontrada");
        return;
    }

    console.log("1 - Pendente");
    console.log("2 - Em andamento");
    console.log("3 - Concluída");

    const opcao = perguntarNumero("Escolha o novo status: ");
    let novoStatus;

    if (opcao === 1) {
        novoStatus = "Pendente";
    } else if (opcao === 2) {
        novoStatus = "Em andamento";
    } else if (opcao === 3) {
        novoStatus = "Concluída";
    } else {
        console.log("status inválido");
        return;
    }

    tarefa.status = novoStatus;
    console.log("status da tarefa atualizado");
}












// export const tarefas = [];


//    const tarefas = [ 
//     { 
//         id: 1, 
//         titulo: "Criar tela de login", 
//         descricao: "Desenvolver a interface de acesso", 
//         responsavel: "Carlos", 
//         prioridade: "Alta", 
//         status: "Pendente" 
//     }, 
//     { 
//         id: 2, 
//         titulo: "Criar banco de dados", 
//         descricao: "Modelar as tabelas do sistema", 
//         responsavel: "Mariana", 
//         prioridade: "Média", 
//         status: "Em andamento" 
//     }, 
//     { 
//         id: 3, 
//         titulo: "Documentar o projeto", 
//         descricao: "Criar documentação das funcionalidades", 
//         responsavel: "Pedro", 
//         prioridade: "Baixa", 
//         status: "" 
//     } 
// ];
 
    
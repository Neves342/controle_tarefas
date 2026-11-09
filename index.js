import { perguntarTexto, perguntarNumero } from "./entrada.js"
import { relatorioGeral, relatorioPrioridades } from "./relatorios.js"
import { cadastrarTarefa, listarTarefa, buscarTarefa, atualizarStatus } from "./tarefas.js"



while (true) {

    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar todas as tarefas");
    console.log("3 - Buscar tarefa por ID");
    console.log("4 - Atualizar status de tarefa");
    console.log("5 - Listar tarefas por status");
    console.log("6 - Relatório geral");
    console.log("7 - Relatório por prioridade");
    console.log("8 - Relatório de responsáveis");
    console.log("0 - Sair");

    const opcao = perguntarNumero("escolha uma opcao: ")

    if (opcao === 0) {
        console.log("encerando");
        break
        
    }


    switch (opcao) {

        case 1:
        cadastrarTarefa()

        case 2:
        listarTarefa()
        break

        case 3:
        buscarTarefa()
        break

        case 4:
        atualizarStatus()
        break

        case 5:
        console.log("\nStatus disponíveis: Pendente - Em andamento - Concluída");
        const statusFiltro = perguntarTexto("Digite o status que deseja filtrar: ");
        listarTarefasPorStatus(statusFiltro);
        break;

        case 6:
        relatorioGeral()
        break

        case 7:
        relatorioPrioridades()
        break

        case 8:
        relatorioResponsaveis()
        break


        default:
        console.log("Opção Inválida")

        
            
    }


    
}
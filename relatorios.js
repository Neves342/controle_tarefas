import { tarefas } from './tarefas.js';

   

export function relatorioGeral() {
    console.log("\n--- RELATÓRIO GERAL DO PROJETO ---");
    
    const total = tarefas.length;
    
  
    const pendentes = tarefas.filter(t => t.status === "Pendente").length;
    const emAndamento = tarefas.filter(t => t.status === "Em andamento").length;
    const concluidas = tarefas.filter(t => t.status === "Concluída").length;

    console.log(`Total de tarefas cadastradas : ${total}`);
    console.log(`Pendentes: ${pendentes}`);
    console.log(`Em andamento: ${emAndamento}`);
    console.log(`Concluídas: ${concluidas}`);

}

export function relatorioPrioridades() {
    console.log("\n--- RELATÓRIO POR PRIORIDADES ---");
    
    const baixa = tarefas.filter(t => t.prioridade === "Baixa").length;
    const media = tarefas.filter(t => t.prioridade === "Média").length;
    const alta = tarefas.filter(t => t.prioridade === "Alta").length;

    console.log(`Prioridade Baixa: ${baixa}`);
    console.log(`Prioridade Média: ${media}`);
    console.log(`Prioridade Alta: ${alta}`);

}

export function relatorioResponsaveis() {
    console.log("\n--- RELATÓRIO DE RESPONSÁVEIS ---");
    
    if (tarefas.length === 0) {
        console.log("Ainda não há nenhuma tarefa cadastrada.");
        return;
    }

    tarefas.forEach(tarefa => {
        console.log(`• [${tarefa.responsavel}] está cuidando de "${tarefa.titulo}" (Status: ${tarefa.status})`);
    });
}




export interface Tarefa {
  id: string;
  titulo: string;
  descricao?: string;
  icone?: string;
  categoria?: string;
  responsaveis: string[];
  carryOver: boolean;
  ativa: boolean;
  criadaEm: Date;
}

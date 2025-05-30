import { TipoPessoa } from '../enums/tipo-pessoa.enum';

export interface Pessoa {
  id: string;
  nome: string;
  tipo: TipoPessoa;
  corTema?: string;
  avatar?: string;
  ausenteAte?: Date;
  ativa: boolean;
  criadaEm: Date;
}

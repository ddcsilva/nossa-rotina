import { DiaSemana } from '../enums/dia-semana.enum';
import { Periodo } from '../enums/periodo.enum';

export interface RegistroTarefa {
  id: string;
  tarefaId: string;
  pessoaId: string;
  executadoPor?: string;
  diaSemana: DiaSemana;
  periodo: Periodo;
  concluida: boolean;
  dataCompleta: string;
  timestamp: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

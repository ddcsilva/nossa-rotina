import { Injectable, signal } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { StorageService } from './storage.service';
import { StorageKeys } from '../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  // Estado interno
  private _pessoas = signal<Pessoa[]>([]);
  private _pessoaAtiva = signal<Pessoa | null>(null);

  // Sinais públicos (readonly)
  readonly pessoas = this._pessoas.asReadonly();
  readonly pessoaAtiva = this._pessoaAtiva.asReadonly();

  constructor(private storage: StorageService) {
    this.carregarPessoas();
  }

  private carregarPessoas(): void {
    const pessoas = this.storage.get<Pessoa[]>(StorageKeys.PESSOAS) || [];
    this._pessoas.set(pessoas);
  }

  // Métodos públicos serão implementados depois
  selecionarPessoa(pessoaId: string): void {
    // TODO: Implementar
  }

  obterPorId(id: string): Pessoa | undefined {
    // TODO: Implementar
    return undefined;
  }
}

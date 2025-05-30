import { Injectable } from '@angular/core';
import { IStorageService } from '../interfaces/storage.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService implements IStorageService {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Erro ao ler do storage:', error);
      return null;
    }
  }

  set<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar no storage:', error);
    }
  }

  delete(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao deletar do storage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Erro ao limpar storage:', error);
    }
  }

  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

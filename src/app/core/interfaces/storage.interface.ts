export interface IStorageService {
  get<T>(key: string): T | null;
  set<T>(key: string, data: T): void;
  delete(key: string): void;
  clear(): void;
  exists(key: string): boolean;
}

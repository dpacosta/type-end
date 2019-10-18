import { Provider } from "./";

export interface ProviderRepository {
  create(provider: Provider): Promise<String>;
  read(selector: Partial<Provider>): Promise<Provider[]>;
}

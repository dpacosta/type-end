import { injectable } from 'inversify';
import { Provider, ProviderRepository } from './';

@injectable()
export class ProviderService {
  private readonly providerRepository: ProviderRepository;

  constructor(providerRepository: ProviderRepository) {
    this.providerRepository = providerRepository;
  }

  create(provider: Provider): Promise<String> {
    return this.providerRepository.create(provider);
  }

  find(selector: Partial<Provider>): Promise<Provider[]> {
    return this.providerRepository.read(selector);
  }
}

import { ObjectId } from 'mongodb';
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import { Provider, ProviderService } from '../../domain/provider';
import { ProviderResult } from '../../api/provider/output';
import { CreateProvider } from './input';

@Resolver(Provider)
export class ProviderApi {
  private readonly providerService: ProviderService;

  constructor(providerService: ProviderService) {
    this.providerService = providerService;
  }

  @Mutation(returns => String)
  async createProvider(@Arg('data') createProvider: CreateProvider): Promise<String> {
    const providerId = await this.providerService.create(
      new Provider(
        new ObjectId(),
        createProvider.licenseNumber,
        createProvider.email,
        createProvider.phoneNumber,
        createProvider.corporateName,
        createProvider.address,
      ),
    );
    return providerId;
  }

  @Query(returns => [ProviderResult])
  async findProviders(selector: Partial<Provider>): Promise<ProviderResult[]> {
    const providers = await this.providerService.find(selector);
    return providers.map(
      p => new ProviderResult(p.licenseNumber, p.email, p.phoneNumber, p.corporateName, p.address),
    );
  }
}

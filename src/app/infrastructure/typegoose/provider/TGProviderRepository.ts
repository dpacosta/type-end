import { ModelType } from 'typegoose';
import { injectable } from 'inversify';
import { ProviderModel } from './';
import { Provider, ProviderRepository } from '../../../domain/provider';

@injectable()
export class TGProviderRepository implements ProviderRepository {
  private readonly model: ModelType<ProviderModel>;

  constructor() {
    this.model = new ProviderModel().getModelForClass(ProviderModel, {
      schemaOptions: { timestamps: true },
    });
  }

  async create(provider: Partial<Provider>): Promise<String> {
    const created = await this.model.create({
      _id: provider.id,
      licenseNumber: provider.licenseNumber,
      email: provider.email,
      phoneNumber: provider.phoneNumber,
      corporateName: provider.corporateName,
      address: provider.address,
    });
    return created._id;
  }

  async read(selector: Partial<Provider>): Promise<Provider[]> {
    const recordList = await this.model.find(selector);
    return recordList.map(
      record =>
        new Provider(
          record._id,
          record.licenseNumber,
          record.email,
          record.phoneNumber,
          record.corporateName,
          record.address,
        ),
    );
  }
}

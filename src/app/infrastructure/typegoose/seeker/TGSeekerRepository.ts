import { ModelType } from 'typegoose';
import { injectable } from 'inversify';
import { SeekerModel } from './';
import { Seeker, SeekerRepository } from '../../../domain/seeker';

@injectable()
export class TGSeekerRepository implements SeekerRepository {
  private readonly model: ModelType<SeekerModel>;

  constructor() {
    this.model = new SeekerModel().getModelForClass(SeekerModel, {
      schemaOptions: { timestamps: true },
    });
  }

  async create(seeker: Seeker): Promise<String> {
    const created = await this.model.create({
      _id: seeker.id,
      phoneNumber: seeker.phoneNumber,
      fullName: seeker.fullName,
      email: seeker.email,
      gender: seeker.gender,
      dateOfBirth: seeker.dateOfBirth,
    });
    return created._id;
  }

  async read(selector: Partial<Seeker>): Promise<Seeker[]> {
    const recordList = await this.model.find(selector);
    return recordList.map(
      record =>
        new Seeker(
          record._id,
          record.phoneNumber,
          record.fullName,
          record.email,
          record.gender,
          record.dateOfBirth,
        ),
    );
  }
}

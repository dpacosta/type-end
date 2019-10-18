import { ModelType } from 'typegoose';
import { injectable } from 'inversify';
import { StaffModel } from './';
import { Staff, StaffRepository } from '../../../domain/staff';

@injectable()
export class TGStaffRepository implements StaffRepository {
  private readonly model: ModelType<StaffModel>;

  constructor() {
    this.model = new StaffModel().getModelForClass(StaffModel, {
      schemaOptions: { timestamps: true },
    });
  }

  async create(staff: Staff): Promise<String> {
    const created = await this.model.create({
      _id: staff.id,
      phoneNumber: staff.phoneNumber,
      fullName: staff.fullName,
      email: staff.email,
      gender: staff.gender,
      address: staff.address,
      sinNumber: staff.sinNumber,
      dateOfBirth: staff.dateOfBirth,
      role: staff.role,
      hireDate: staff.hireDate,
      salary: staff.salary,
    });
    return created._id;
  }

  async read(selector: Partial<Staff>): Promise<Staff[]> {
    const recordList = await this.model.find(selector);
    return recordList.map(
      record =>
        new Staff(
          record._id,
          record.phoneNumber,
          record.fullName,
          record.email,
          record.gender,
          record.address,
          record.sinNumber,
          record.dateOfBirth,
          record.role,
          record.hireDate,
          record.salary,
        ),
    );
  }
}

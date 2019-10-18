import { injectable } from 'inversify';
import { Staff, StaffRepository } from './';

@injectable()
export class StaffService {
  private readonly staffRepository: StaffRepository;

  constructor(staffRepository: StaffRepository) {
    this.staffRepository = staffRepository;
  }

  create(staff: Staff): Promise<String> {
    return this.staffRepository.create(staff);
  }

  find(selector: Partial<Staff>): Promise<Staff[]> {
    return this.staffRepository.read(selector);
  }
}

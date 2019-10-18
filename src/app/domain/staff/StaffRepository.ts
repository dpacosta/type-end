import { Staff } from "./";

export interface StaffRepository {
  create(staff: Staff): Promise<String>;
  read(selector: Partial<Staff>): Promise<Staff[]>;
}

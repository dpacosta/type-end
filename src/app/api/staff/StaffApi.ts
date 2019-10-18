import { ObjectId } from 'mongodb';
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import { User, UserType, UserProfile, UserService } from '../../domain/user';
import { Staff, StaffService } from '../../domain/staff';
import { StaffResult } from '../../api/staff/output';
import { CreateStaff } from './input';

@Resolver(Staff)
export class StaffApi {
  private readonly userService: UserService;
  private readonly staffService: StaffService;

  constructor(userService: UserService, staffService: StaffService) {
    this.userService = userService;
    this.staffService = staffService;
  }

  @Mutation(returns => String)
  async createStaff(@Arg('data') createStaff: CreateStaff): Promise<String> {
    const staffId = await this.staffService.create(
      new Staff(
        new ObjectId(),
        createStaff.phoneNumber,
        createStaff.fullName,
        createStaff.email,
        createStaff.gender,
        createStaff.address,
        createStaff.sinNumber,
        createStaff.dateOfBirth,
        createStaff.role,
        createStaff.hireDate,
        createStaff.salary,
      ),
    );
    // TODO: handle errors
    const userId = await this.userService.create(
      new User(
        new ObjectId(),
        createStaff.email,
        createStaff.password,
        new UserProfile(UserType.Seeker, staffId),
      ),
    );
    return staffId;
  }

  @Query(returns => [StaffResult])
  async findStaff(selector: Partial<Staff>): Promise<StaffResult[]> {
    const staffList = await this.staffService.find(selector);
    return staffList.map(
      s =>
        new StaffResult(
          s.phoneNumber,
          s.fullName,
          s.email,
          s.gender,
          s.address,
          s.sinNumber,
          s.dateOfBirth,
          s.role,
          s.hireDate,
          s.salary,
        ),
    );
  }
}

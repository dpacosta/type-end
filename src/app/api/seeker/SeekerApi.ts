import { ObjectId } from 'mongodb';
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import { User, UserType, UserProfile, UserService } from '../../domain/user';
import { Seeker, SeekerService } from '../../domain/seeker';
import { SeekerResult } from '../../api/seeker/output';
import { CreateSeeker } from './input';

@Resolver(Seeker)
export class SeekerApi {
  private readonly userService: UserService;
  private readonly seekerService: SeekerService;

  constructor(userService: UserService, seekerService: SeekerService) {
    this.userService = userService;
    this.seekerService = seekerService;
  }

  @Mutation(returns => String)
  async createSeeker(@Arg('data') createSeeker: CreateSeeker): Promise<String> {
    const seekerId = await this.seekerService.create(
      new Seeker(
        new ObjectId(),
        createSeeker.phoneNumber,
        createSeeker.fullName,
        createSeeker.email,
        createSeeker.gender,
        createSeeker.dateOfBirth,
      ),
    );
    // TODO: handle errors
    const userId = await this.userService.create(
      new User(
        new ObjectId(),
        createSeeker.email,
        createSeeker.password,
        new UserProfile(UserType.Seeker, seekerId),
      ),
    );
    return seekerId;
  }

  @Query(returns => [SeekerResult])
  async findSeekers(selector: Partial<Seeker>): Promise<SeekerResult[]> {
    const seekers = await this.seekerService.find(selector);
    return seekers.map(
      s => new SeekerResult(s.phoneNumber, s.fullName, s.email, s.gender, s.dateOfBirth),
    );
  }
}

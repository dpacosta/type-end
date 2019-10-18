import { injectable } from 'inversify';
import { User, UserRepository } from './';

@injectable()
export class UserService {
  private readonly userRepository: UserRepository;

  constructor(providerRepository: UserRepository) {
    this.userRepository = providerRepository;
  }

  create(user: User): Promise<String> {
    return this.userRepository.create(user);
  }
}

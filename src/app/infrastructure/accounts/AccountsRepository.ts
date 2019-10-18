import { accountsPassword } from './';
import { injectable } from 'inversify';
import { User, UserType, UserRepository } from '../../domain/user';

@injectable()
export class AccountsRepository implements UserRepository {
  async create(user: User): Promise<String> {
    const createdUserId = await accountsPassword.createUser(user);
    return createdUserId;
  }
}

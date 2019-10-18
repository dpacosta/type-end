import { User, UserType } from "./";

export interface UserRepository {
  create(user: User): Promise<String>;
}

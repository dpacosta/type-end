import { Seeker } from "./";

export interface SeekerRepository {
  create(provider: Seeker): Promise<String>;
  read(selector: Partial<Seeker>): Promise<Seeker[]>;
}

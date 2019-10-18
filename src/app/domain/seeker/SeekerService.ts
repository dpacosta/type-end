import { injectable } from 'inversify';
import { Seeker, SeekerRepository } from './';

@injectable()
export class SeekerService {
  private readonly seekerRepository: SeekerRepository;

  constructor(seekerRepository: SeekerRepository) {
    this.seekerRepository = seekerRepository;
  }

  create(seeker: Seeker): Promise<String> {
    return this.seekerRepository.create(seeker);
  }

  find(selector: Partial<Seeker>): Promise<Seeker[]> {
    return this.seekerRepository.read(selector);
  }
}

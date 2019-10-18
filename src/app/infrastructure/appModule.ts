import "reflect-metadata";
import { Container } from "inversify";
import { UserService, UserRepository } from "../domain/user";
import { AccountsRepository } from "./accounts";
import { ProviderService, ProviderRepository } from "../domain/provider";
import { TGProviderRepository } from "./typegoose/provider";
import { SeekerService, SeekerRepository } from "../domain/seeker";
import { TGSeekerRepository } from "./typegoose/seeker";
import { StaffService, StaffRepository } from "../domain/staff";
import { TGStaffRepository } from "./typegoose/staff";

const TYPES = {
  UserService: Symbol.for("UserService"),
  UserRepository: Symbol.for("UserRepository"),
  ProviderService: Symbol.for("ProviderService"),
  ProviderRepository: Symbol.for("ProviderRepository"),
  SeekerService: Symbol.for("SeekerService"),
  SeekerRepository: Symbol.for("SeekerRepository"),
  StaffService: Symbol.for("StaffService"),
  StaffRepository: Symbol.for("StaffRepository"),
};

// multiple implementations
// const TAG = {
//   whatever: "whatever"
// };
// container.bind<IProviderRepository>(TYPES.IProviderRepository).to(whatever).whenTargetNamed(TAG.whatever);

const container = new Container();
container
  .bind<UserService>(TYPES.UserService)
  .to(UserService)
  .whenTargetIsDefault();
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(AccountsRepository)
  .whenTargetIsDefault();
container
  .bind<ProviderService>(TYPES.ProviderService)
  .to(ProviderService)
  .whenTargetIsDefault();
container
  .bind<ProviderRepository>(TYPES.ProviderRepository)
  .to(TGProviderRepository)
  .whenTargetIsDefault();
container
  .bind<SeekerService>(TYPES.SeekerService)
  .to(SeekerService)
  .whenTargetIsDefault();
container
  .bind<SeekerRepository>(TYPES.SeekerRepository)
  .to(TGSeekerRepository)
  .whenTargetIsDefault();
container
  .bind<StaffService>(TYPES.StaffService)
  .to(StaffService)
  .whenTargetIsDefault();
container
  .bind<StaffRepository>(TYPES.StaffRepository)
  .to(TGStaffRepository)
  .whenTargetIsDefault();

export default container;

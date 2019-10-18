import { UserType } from "./";

export class UserProfile {
  type: UserType;
  typeId: String;

  constructor(type: UserType, typeId: String) {
    this.type = type;
    this.typeId = typeId;
  }
}

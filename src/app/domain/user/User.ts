import { ObjectId } from "mongodb";
import { UserProfile } from "./";

export class User {
  id: ObjectId;
  email: string;
  password: string;
  profile: UserProfile;

  constructor(
    id: ObjectId,
    email: string,
    password: string,
    profile: UserProfile
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.profile = profile;
  }
}

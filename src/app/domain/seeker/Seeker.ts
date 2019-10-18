import { ObjectId } from "mongodb";

export class Seeker {
  id: ObjectId;
  phoneNumber: string;
  fullName: string;
  email: string;
  gender: string;
  dateOfBirth: string;

  constructor(
    id: ObjectId,
    phoneNumber: string,
    fullName: string,
    email: string,
    gender: string,
    dateOfBirth: string
  ) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.email = email;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
}

import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SeekerResult {
  @Field(type => String)
  phoneNumber: string;

  @Field(type => String)
  fullName: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  gender: string;

  @Field(type => String)
  dateOfBirth: string;

  constructor(
    phoneNumber: string,
    fullName: string,
    email: string,
    gender: string,
    dateOfBirth: string
  ) {
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.email = email;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
}

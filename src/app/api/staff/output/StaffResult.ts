import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class StaffResult {
  @Field(type => String)
  phoneNumber: string;

  @Field(type => String)
  fullName: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  gender: string;

  @Field(type => String)
  address: string;

  @Field(type => String)
  sinNumber: string;

  @Field(type => String)
  dateOfBirth: string;

  @Field(type => String)
  role: string;

  @Field(type => String)
  hireDate: string;

  @Field(type => String)
  salary: string;

  constructor(
    phoneNumber: string,
    fullName: string,
    email: string,
    gender: string,
    address: string,
    sinNumber: string,
    dateOfBirth: string,
    role: string,
    hireDate: string,
    salary: string
  ) {
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.email = email;
    this.gender = gender;
    this.address = address;
    this.sinNumber = sinNumber;
    this.dateOfBirth = dateOfBirth;
    this.role = role;
    this.hireDate = hireDate;
    this.salary = salary;
  }
}

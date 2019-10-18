import { InputType, Field } from "type-graphql";

@InputType()
export class CreateStaff {
  @Field(type => String)
  phoneNumber: string;

  @Field(type => String)
  fullName: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

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
}

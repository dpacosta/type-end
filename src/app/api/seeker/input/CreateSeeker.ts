import { InputType, Field } from "type-graphql";

@InputType()
export class CreateSeeker {
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
  dateOfBirth: string;

  @Field(type => String)
  permissions: string;

  @Field(type => String)
  profileImage: string;
}

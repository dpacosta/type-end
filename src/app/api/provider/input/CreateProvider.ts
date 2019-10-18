import { InputType, Field } from "type-graphql";

@InputType()
export class CreateProvider {
  @Field(type => String)
  licenseNumber: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => String)
  phoneNumber: string;

  @Field(type => String)
  corporateName: string;

  @Field(type => String)
  address: string;
}

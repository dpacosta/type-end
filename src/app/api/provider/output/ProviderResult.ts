import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProviderResult {
  @Field(type => String)
  licenseNumber: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  phoneNumber: string;

  @Field(type => String)
  corporateName: string;

  @Field(type => String)
  address: string;

  constructor(
    licenseNumber: string,
    email: string,
    phoneNumber: string,
    corporateName: string,
    address: string
  ) {
    this.licenseNumber = licenseNumber;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.corporateName = corporateName;
    this.address = address;
  }
}

import { prop, Typegoose } from "typegoose";
import { ObjectType, Field, ID } from "type-graphql";
import { ObjectId } from "mongodb";

@ObjectType()
export class ProviderModel extends Typegoose {
  @prop({ required: true })
  @Field(type => ID)
  readonly _id!: ObjectId;

  @prop({ required: true })
  @Field(type => String)
  licenseNumber!: string;

  @prop({ required: true })
  @Field(type => String)
  email!: string;

  @prop({ required: true })
  @Field(type => String)
  phoneNumber!: string;

  @prop({ required: true })
  @Field(type => String)
  corporateName!: string;

  @prop({ required: true })
  @Field(type => String)
  address!: string;
}

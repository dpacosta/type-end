import { prop, Typegoose } from "typegoose";
import { ObjectType, Field, ID } from "type-graphql";
import { ObjectId } from "mongodb";

@ObjectType()
export class StaffModel extends Typegoose {
  @prop({ required: true })
  @Field(type => ID)
  readonly _id: ObjectId;

  @prop({ required: true })
  @Field(type => String)
  phoneNumber: string;

  @prop({ required: true })
  @Field(type => String)
  fullName: string;

  @prop({ required: true })
  @Field(type => String)
  email: string;

  @prop({ required: true })
  @Field(type => String)
  gender: string;

  @prop({ required: true })
  @Field(type => String)
  address: string;

  @prop({ required: true })
  @Field(type => String)
  sinNumber: string;

  @prop({ required: true })
  @Field(type => String)
  dateOfBirth: string;

  @prop({ required: true })
  @Field(type => String)
  role: string;

  @prop({ required: true })
  @Field(type => String)
  hireDate: string;

  @prop({ required: true })
  @Field(type => String)
  salary: string;
}

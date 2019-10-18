import { ObjectId } from "mongodb";

export class Provider {
  id: ObjectId;
  licenseNumber: string;
  email: string;
  phoneNumber: string;
  corporateName: string;
  address: string;

  constructor(
    id: ObjectId,
    licenseNumber: string,
    email: string,
    phoneNumber: string,
    corporateName: string,
    address: string
  ) {
    this.id = id;
    this.licenseNumber = licenseNumber;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.corporateName = corporateName;
    this.address = address;
  }
}

import { ObjectId } from "mongodb";

export class Staff {
  id: ObjectId;
  phoneNumber: string;
  fullName: string;
  email: string;
  gender: string;
  address: string;
  sinNumber: string;
  dateOfBirth: string;
  role: string;
  hireDate: string;
  salary: string;

  constructor(
    id: ObjectId,
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
    this.id = id;
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

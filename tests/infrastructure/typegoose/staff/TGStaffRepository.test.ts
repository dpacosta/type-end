import "reflect-metadata";
import * as inMemoryDB from "../../dbHelper";
import { ObjectId } from "mongodb";
import { Staff } from "../../../../src/app/domain/staff";
import { TGStaffRepository } from "../../../../src/app/infrastructure/typegoose/staff";
import { expect } from "chai";

describe("Typegoose Staff Repository", () => {
  const repository = new TGStaffRepository();

  beforeEach(async () => {
    await inMemoryDB.startdb();
  });

  afterEach(async () => {
    await inMemoryDB.stopdb();
  });

  it("Should create staff", async () => {
    const staff = new Staff(
      new ObjectId(),
      "phoneNumber",
      "fullName",
      "email",
      "gender",
      "address",
      "sinNumber",
      "dateOfBirth",
      "role",
      "hireDate",
      "salary",
    );
    await repository.create(staff);

    const found = await repository.read({});

    expect(found[0]).to.deep.equal(staff);
  });
});

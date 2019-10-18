import "reflect-metadata";
import * as inMemoryDB from "../../dbHelper";
import { ObjectId } from "mongodb";
import { Seeker } from "../../../../src/app/domain/seeker";
import { TGSeekerRepository } from "../../../../src/app/infrastructure/typegoose/seeker";
import { expect } from "chai";

describe("Typegoose Seeker Repository", () => {
  const repository = new TGSeekerRepository();

  beforeEach(async () => {
    await inMemoryDB.startdb();
  });

  afterEach(async () => {
    await inMemoryDB.stopdb();
  });

  it("Should create a seeker", async () => {
    const seeker = new Seeker(
      new ObjectId(),
      "phoneNumber",
      "fullName",
      "email",
      "gender",
      "dateOfBirth",
    );
    await repository.create(seeker);

    const found = await repository.read({});

    expect(found[0]).to.deep.equal(seeker);
  });
});

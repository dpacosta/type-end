import "reflect-metadata";
import * as inMemoryDB from "../../dbHelper";
import { ObjectId } from "mongodb";
import { Provider } from "../../../../src/app/domain/provider";
import { TGProviderRepository } from "../../../../src/app/infrastructure/typegoose/provider";
import { expect } from "chai";

describe("Typegoose Provider Repository", () => {
  const repository = new TGProviderRepository();

  beforeEach(async () => {
    await inMemoryDB.startdb();
  });

  afterEach(async () => {
    await inMemoryDB.stopdb();
  });

  it("Should create a provider", async () => {
    const provider = new Provider(
      new ObjectId(),
      "licenseNumber",
      "email",
      "phoneNumber",
      "corporateName",
      "address",
    );
    await repository.create(provider);

    const found = await repository.read({});

    expect(found[0]).to.deep.equal(provider);
  });
});

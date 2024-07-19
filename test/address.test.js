import supertest from "supertest";
import { createTestAddress, createTestContact, createTestUser, getTestAddress, getTestContact, removeAllTestAddresses, removeAllTestContact, removeTestUser } from "./test-util";
import { web } from "../src/application/web";

describe('POST /api/contacts/:contactId/addresses', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    it("Should can create new address", async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .post("/api/contacts/" + testContact.id + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "Jl. Imam Bonjol",
                city: "Surabaya",
                province: "Jawa Timur",
                country: "Indonesia",
                postal_code: "12345"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.street).toBe("Jl. Imam Bonjol");
        expect(result.body.data.city).toBe("Surabaya");
        expect(result.body.data.province).toBe("Jawa Timur");
        expect(result.body.data.country).toBe("Indonesia");
        expect(result.body.data.postal_code).toBe("12345");
    });
});

describe('GET /api/contacts/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    it('Should can get address', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
            .set("Authorization", "test");

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testAddress.id);
        expect(result.body.data.street).toBe(testAddress.street);
    });

    it("Should reject if contact is not found", async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get("/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id)
            .set("Authorization", "test");

        expect(result.status).toBe(404);
    });

    it("Should reject if address is not found", async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get("/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1))
            .set("Authorization", "test");

        expect(result.status).toBe(404);
    });
});

describe('PUT /api/contacts/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContact();
        await removeTestUser();
    });

    it("Should can update address", async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
            .set("Authorization", "test")
            .send({
                street: "Jl. Imam Bonjol",
                city: "Surabaya",
                province: "Jawa Timur",
                country: "Indonesia",
                postal_code: "12345"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testAddress.id);
        expect(result.body.data.street).toBe("Jl. Imam Bonjol");
    });

    it("Should reject if address is not found", async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put("/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1))
            .set("Authorization", "test")
            .send({});

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });

    it("Should reject if request body is invalid", async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
            .set("Authorization", "test")
            .send({
                street: "",
                city: "",
                province: "",
                country: "",
                postal_code: "219301920391039102931"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('DELETE /api/contacts/:contactId/addresses/:addressId', () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });
  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContact();
    await removeTestUser();
  });

  it("Should can delete address", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test");

    expect(result.status).toBe(200);

    testAddress = await getTestAddress();
    expect(testAddress).toBeNull();
  });

  it("Should reject if address is not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete("/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1))
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});

describe('GET /api/contacts/:contactId/addresses', () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });
  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContact();
    await removeTestUser();
  });

  it("Should can get all addresses", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .get("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(1);
  });

  it("Should reject if contact is not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .get("/api/contacts/" + (testContact.id + 1) + "/addresses")
      .set("Authorization", "test");

      expect(result.status).toBe(404);
  });
});



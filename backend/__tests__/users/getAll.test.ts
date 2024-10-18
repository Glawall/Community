import request from "supertest";
import app from "../../app/app";
import db from "../../app/connection";

import { testData } from "../../app/db/seeds/test";
import seed from "../../app/db/seeds/seed";
import { User } from "../../app/db/seeds/test/users";

beforeEach(async () => {
  await seed(testData);
});

afterAll(async () => {
  await db.end();
});

describe.only("getAllUsers", () => {
  test("200 - GET: Responds with an array of all users", async () => {
    const {
      body: { users },
    } = await request(app).get("/api/users").expect(200);
    users.forEach((user: User[]) => {
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("first_name");
      expect(user).toHaveProperty("last_name");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("about");
      expect(user).toHaveProperty("phone_number");
      expect(user).toHaveProperty("address");
      expect(user).toHaveProperty("postcode");
      expect(user).toHaveProperty("avatar_url");
      expect(user).toHaveProperty("age");
      expect(user).toHaveProperty("help_radius");
      expect(user).toHaveProperty("additional_contacts");
    });
  });
});

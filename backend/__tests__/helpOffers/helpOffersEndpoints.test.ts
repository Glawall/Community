import request from "supertest";
import app from "../../app/app";
import db from "../../app/connection";
import { testData } from "../../app/db/seeds/test";
import seed from "../../app/db/seeds/seed";
import { HelpOffer } from "../../app/db/seeds/test/help-offers";

beforeEach(async () => {
  await seed(testData);
});

afterAll(async () => {
  await db.end();
});

describe("getByHelpRequestId", () => {
  test("200 - GET: Responds with an array of help offer objects that have the help_request_id", async () => {
    const {
      body: { helpOffers },
    } = await request(app).get("/api/help-requests/9/help-offers").expect(200);
    helpOffers.forEach((offer: HelpOffer) => {
      expect(offer).toHaveProperty("user_id");
      expect(offer).toHaveProperty("first_name");
      expect(offer).toHaveProperty("address");
      expect(offer).toHaveProperty("email");
      expect(offer).toHaveProperty("phone_number");
      expect(offer.help_request_id).toBe(9);
      expect(offer).toHaveProperty("status");
    });
  });
  test("404 - GET: Responds with appropriate error when invalid help_request_id provided", async () => {
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .get("/api/help-requests/gfrf/help-offers")
      .expect(400);
    expect(message).toBe("Invalid help request id provided");
  });
  test("200 - GET: Responds with an empty array when help_request_id provided has no help offers associated with it", async () => {
    const {
      body: { helpOffers },
    } = await request(app).get("/api/help-requests/35/help-offers").expect(200);
    expect(helpOffers).toEqual([]);
  });
});

describe("createHelpOffer", () => {
  test("201 - POST: Responds with a newly created help offer", async () => {
    const helpOfferBody = {
      help_request_id: 7,
      status: "active",
    };
    const {
      body: { newHelpOffer },
    } = await request(app)
      .post("/api/users/9/help-offers")
      .send(helpOfferBody)
      .expect(201);
    expect(newHelpOffer).toMatchObject({
      helper_id: 9,
      help_request_id: 7,
      status: "active",
    });
  });
  test("400 - POST: Responds with appropriate error when invalid user_id provided", async () => {
    const helpOfferBody = {
      help_request_id: 2,
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .post("/api/users/gthty/help-offers")
      .send(helpOfferBody)
      .expect(400);
    expect(message).toBe("Invalid user id provided");
  });
  test("400 - POST: Responds with appropriate error when invalid body fields provided", async () => {
    const helpOfferBody = {
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .post("/api/users/5/help-offers")
      .send(helpOfferBody)
      .expect(400);
    expect(message).toBe("Invalid input");
  });
  test("404 - POST: Responds with appropriate error when nonexistent user_id provided", async () => {
    const helpOfferBody = {
      help_request_id: 2,
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .post("/api/users/545/help-offers")
      .send(helpOfferBody)
      .expect(400);
    expect(message).toBe("User was not found");
  });
});

describe("getByUserId", () => {
  test("200 - GET: Responds with an array of objects that have request, requester, offer objects with the appropriate properties", async () => {
    const {
      body: { userHelpOffers },
    } = await request(app).get("/api/users/7/help-offers").expect(200);
    userHelpOffers.forEach((offer: any) => {
      expect(offer.request).toHaveProperty("id");
      expect(offer.request).toHaveProperty("title");
      expect(offer.request).toHaveProperty("help_type");
      expect(offer.request).toHaveProperty("description");
      expect(offer.request).toHaveProperty("created_at");
      expect(offer.request).toHaveProperty("req_date");
      expect(offer.request).toHaveProperty("status");
      expect(offer.requester).toHaveProperty("first_name");
      expect(offer.requester).toHaveProperty("last_name");
      expect(offer.requester).toHaveProperty("id");
      expect(offer.offers[0]).toHaveProperty("status");
      expect(offer.offers[0]).toHaveProperty("helper");
      offer.offers.forEach((off: any) => {
        expect(typeof off.helper.id).toBe("number");
        expect(typeof off.helper.first_name).toBe("string");
        expect(typeof off.helper.last_name).toBe("string");
      });
    });
  });

  test("404 - GET: Responds with appropriate error when invalid help_request_id provided", async () => {
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .get("/api/help-requests/gfrf/help-offers")
      .expect(400);
    expect(message).toBe("Invalid help request id provided");
  });

  test("200 - GET: Responds with an empty array when help_request_id provided has no help offers associated with it", async () => {
    const {
      body: { helpOffers },
    } = await request(app).get("/api/help-requests/50/help-offers").expect(200);
    expect(helpOffers).toEqual([]);
  });
});

describe("removeHelpOffer", () => {
  test("204 - DELETE removes a help request and responds with a 204", async () => {
    await request(app)
      .delete("/api/help-requests/1/help-offers/1")
      .set("X-User-ID", "1")
      .expect(204);
  });
  test("404 - DELETE returns not found if help offer does not exist", async () => {
    const response = await request(app)
      .delete("/api/help-requests/1/help-offers/999")
      .set("X-User-ID", "1")
      .expect(404);
    expect(response.body.error.message).toBe("Help offer not found");
  });

  test("401 - DELETE returns forbidden if user is not authorized", async () => {
    const response = await request(app)
      .delete("/api/help-requests/1/help-offers/8")
      .set("X-User-ID", "2")
      .expect(401);
    expect(response.body.error.message).toBe(
      "You are not allowed to delete this help offer"
    );
  });

  test("400 - DELETE returns bad request if parameters are invalid", async () => {
    const response = await request(app)
      .delete("/api/help-requests/invalid/help-offers/8")
      .set("X-User-ID", "1")
      .expect(400);

    expect(response.body.error.message).toBe("Invalid parameters provided");
  });
});

describe("updateHelpOffer", () => {
  test("200 - PATCH: Responds with an updated help offer status,", async () => {
    const helpOfferBody: Partial<HelpOffer> = {
      status: "active",
    };
    const {
      body: { updatedHelpOffer },
    } = await request(app)
      .patch("/api/help-requests/9/help-offers/8")
      .set("X-User-ID", "9")
      .send(helpOfferBody)
      .expect(200);
    expect(updatedHelpOffer).toMatchObject({
      helper_id: 8,
      help_request_id: 9,
      status: "active",
    });
  });
  test("404 - GET: Responds with appropriate error when invalid help_request_id provided", async () => {
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .get("/api/help-requests/gfrf/help-offers")
      .expect(400);
    expect(message).toBe("Invalid help request id provided");
  });
  test("400 - PATCH: Responds with a validation error if help request ID is invalid", async () => {
    const helpOfferBody: Partial<HelpOffer> = {
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .patch("/api/help-requests/invalid/help-offers/8")
      .set("X-User-ID", "9")
      .send(helpOfferBody)
      .expect(400);
    expect(message).toBe("Invalid parameters provided");
  });

  test("404 - PATCH: Responds with not found if help request does not exist", async () => {
    const helpOfferBody: Partial<HelpOffer> = {
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .patch("/api/help-requests/999/help-offers/8") // Assuming 999 does not exist
      .set("X-User-ID", "9")
      .send(helpOfferBody)
      .expect(404);
    expect(message).toBe("Help request not found");
  });

  test("401 - PATCH: Responds with unauthorized error if user is not the requester or helper", async () => {
    const helpOfferBody: Partial<HelpOffer> = {
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .patch("/api/help-requests/9/help-offers/8")
      .set("X-User-ID", "10")
      .send(helpOfferBody)
      .expect(401);
    expect(message).toBe("You are not allowed to update this help offer");
  });

  test("404 - PATCH: Responds with not found if help offer does not exist", async () => {
    const helpOfferBody: Partial<HelpOffer> = {
      status: "active",
    };
    const {
      body: {
        error: { message },
      },
    } = await request(app)
      .patch("/api/help-requests/9/help-offers/999")
      .set("X-User-ID", "9")
      .send(helpOfferBody)
      .expect(404);
    expect(message).toBe(
      "Help offer not found for this help request and helper ID"
    );
  });
});

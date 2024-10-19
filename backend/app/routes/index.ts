import express from "express";
const router = express.Router();

import * as usersController from "../controllers/users";
import * as helpRequestsController from "../controllers/helpRequests";
import * as helpOffersController from "../controllers/helpOffers";
// import * as typesController from "../controllers/helpTypes";

router.get("/", (req, res, next) => {
  res.status(200).send({ message: "welcome to the Good Neighbour API" });
});

// * Users
router.get("/api/users", usersController.getAllUsers);
router.get("/api/users/:user_id", usersController.getByUserId);
router.delete("/api/users/:user_id", usersController.removeUser);
router.patch("/api/users/:user_id", usersController.updateUser);
router.post("/api/users", usersController.createUser);

// * Help requests
// router.get("/api/help-requests", helpRequestsController.getAll);
router.get(
  "/api/help-requests/:help_request_id",
  helpRequestsController.getByHelpRequestId
);
// router.get(
//   "/api/users/:user_id/help-requests",
//   helpRequestsController.getByUserId
// );
// router.post("/api/help-requests", helpRequestsController.create);
// router.delete(
//   "/api/help-requests/:help_request_id",
//   helpRequestsController.remove
// );
// router.patch(
//   "/api/help-requests/:help_request_id",
//   helpRequestsController.update
// );

// * Help Offers
router.get("/api/users/:user_id/help-offers", helpOffersController.getByUserId);
router.get(
  "/api/help-requests/:help_request_id/help-offers",
  helpOffersController.getByHelpRequestId
);
router.post(
  "/api/users/:user_id/help-offers",
  helpOffersController.createHelpOffer
);
router.patch(
  "/api/help-requests/:help_request_id/help-offers/:helper_id",
  helpOffersController.updateHelpOffer
);
// router.patch(
//   "/api/help-requests/:help_request_id/help-offers",
//   helpOffersController.offereeUpdateHelpOffer
// );
router.delete(
  "/api/help-requests/:help_request_id/help-offers/:helper_id",
  helpOffersController.removeHelpOffer
);

// // * Types
// router.get("/api/help-types", typesController.getAll);

export default router;

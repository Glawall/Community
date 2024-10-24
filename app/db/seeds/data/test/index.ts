import { HelpRequest, helpRequestsData } from "./help-requests.ts";
import { Comment, commentsData } from "./comments.ts";
import { HelpType, typesData } from "./help-types.ts";
import { User, usersData } from "./users.ts";
import { HelpOffer, helpOffersData } from "./help-offers.ts";

export const testData = {
  helpRequestsData,
  commentsData,
  typesData,
  usersData,
  helpOffersData,
};

export interface Data {
  usersData: User[];
  typesData: HelpType[];
  helpRequestsData: HelpRequest[];
  commentsData: Comment[];
  helpOffersData: HelpOffer[];
}

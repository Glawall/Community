import { HelpRequest, helpRequestsData } from "./help-requests.ts";
import { Comment, commentsData } from "./comments.ts";
import { Type, typesData } from "./types.ts";
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
  typesData: Type[];
  helpRequestsData: HelpRequest[];
  commentsData: Comment[];
  helpOffersData: HelpOffer[];
}

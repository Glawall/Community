import * as helpOffersRepo from "../../repositories/helpOffers/getByHelpRequestId";

export const getByHelpRequestId = async (id: number) => {
  const helpOffersByRequestId = await helpOffersRepo.getByHelpRequestId(id);
  return helpOffersByRequestId;
};

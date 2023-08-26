import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tripInformation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

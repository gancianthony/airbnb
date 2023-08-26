import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingOwner: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};

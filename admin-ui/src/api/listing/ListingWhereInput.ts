import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingOwner?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmenities?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  title?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};

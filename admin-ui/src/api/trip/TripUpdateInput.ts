import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  tripInformation?: InputJsonValue;
  user?: UserWhereUniqueInput;
};

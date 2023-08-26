import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  tripInformation: InputJsonValue;
  user: UserWhereUniqueInput;
};

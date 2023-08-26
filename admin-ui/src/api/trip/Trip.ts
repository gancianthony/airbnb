import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  tripInformation: JsonValue;
  updatedAt: Date;
  user?: User;
};

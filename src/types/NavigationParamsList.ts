import { ScreenNames } from "@constants";
import { City } from "./City";


export type NavigationParamsList = {
  [ScreenNames.CITIES]: undefined
  [ScreenNames.CITY_DETAILS]: City;
};
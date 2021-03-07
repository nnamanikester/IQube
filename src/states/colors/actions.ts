import { CHANGE_TO_DARK_MODE, CHANGE_TO_LIGHT_MODE, ColorActionType } from "./types";

export function changeToDarkMode(): ColorActionType {
  return { type: CHANGE_TO_DARK_MODE }
};

export function changeToLightMode (): ColorActionType {
  return { type: CHANGE_TO_LIGHT_MODE };
};

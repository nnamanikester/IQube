import { CHANGE_TO_DARK_MODE, CHANGE_TO_LIGHT_MODE, ColorActionType, ColorsState } from "./types";

const dark: ColorsState = {
  background: "#F9FDFB",
  primary: "#34C47C",
  lightPrimary: "#73DAA6",
  black: "#333333",
  white: "#FFFFFF",
  text: "#333333",
  grey: "#979797",
  lightGrey: "#F2F2F2",
  inactive: "#ECFAF3",
  danger: "#E52424",
  warning: "#EBA41D",
  success: "#34C47C",
}

const light: ColorsState = {
  background: "#F9FDFB",
  primary: "#34C47C",
  lightPrimary: "#73DAA6",
  black: "#333333",
  white: "#FFFFFF",
  text: "#333333",
  grey: "#979797",
  lightGrey: "#F2F2F2",
  inactive: "#ECFAF3",
  danger: "#E52424",
  warning: "#EBA41D",
  success: "#34C47C",
}

const INITIAL_STATE: ColorsState = dark;

export default (state = INITIAL_STATE, action: ColorActionType): ColorsState => {
  switch (action.type) {
    case CHANGE_TO_DARK_MODE:
      return dark;
    case CHANGE_TO_LIGHT_MODE:
      return light;
    default:
      return state;
  }
};

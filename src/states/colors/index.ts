import { CHANGE_TO_DARK_MODE, CHANGE_TO_LIGHT_MODE, ColorActionType, ColorsState } from "./types";

const dark: ColorsState = {
  background: "#FAF9F9",
  primary: "#3580FF",
  lightPrimary: "#6FA4FF",
  black: "#001029",
  white: "#FFFFFF",
  text: "#828282",
  grey: "#BDBDBD",
  lightGrey: "#F2F2F2",
  inactive: "#E0E0E0",
  danger: "#EB5757",
  warning: "#FFCB27",
  success: "#34C47C",
}

const light: ColorsState = {
  background: "#FAF9F9",
  primary: "#3580FF",
  lightPrimary: "#6FA4FF",
  black: "#001029",
  white: "#FFFFFF",
  text: "#828282",
  grey: "#BDBDBD",
  lightGrey: "#F2F2F2",
  inactive: "#E0E0E0",
  danger: "#EB5757",
  warning: "#FFCB27",
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

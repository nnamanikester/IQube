export const CHANGE_TO_LIGHT_MODE = "CHANGE_TO_LIGHT_MODE";
export const CHANGE_TO_DARK_MODE = "CHANGE_TO_DARK_MODE";

export interface IChangeToDarkModeAction {
  type: typeof CHANGE_TO_DARK_MODE,
}

export interface IChangeToLightModeAction {
  type: typeof CHANGE_TO_LIGHT_MODE,
}

export interface ColorsState {
  background: string,
  primary: string,
  lightPrimary: string,
  black: string,
  white: string,
  text: string,
  grey: string,
  lightGrey: string,
  inactive: string,
  danger: string,
  warning: string,
  success: string,
}

export type ColorActionType = IChangeToDarkModeAction | IChangeToLightModeAction;

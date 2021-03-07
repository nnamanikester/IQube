export const SET_DARK_MODE = 'SET_DARK_MODE';

export interface ISetDarkModeAction {
  type: typeof SET_DARK_MODE,
  payload: boolean,
}

export type IsDarkState = boolean; 

export type IsDarkAction = ISetDarkModeAction;
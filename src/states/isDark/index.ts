import { IsDarkAction, IsDarkState, SET_DARK_MODE } from "./types";

const INITIAL_STATE: IsDarkState = false;

export default (state = INITIAL_STATE, action: IsDarkAction): IsDarkState => {
  switch (action.type) {
    case SET_DARK_MODE:
      return action.payload;
    default:
      return state;
  }
};

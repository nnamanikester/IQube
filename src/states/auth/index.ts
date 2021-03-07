import { SET_USER, LOG_OUT, AuthState, AuthActionTypes } from "./types";

const INITIAL_STATE: AuthState = {
  isLogged: false,
  user: {},
};

export default (state = INITIAL_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_USER:
      if (!action.payload) {
        return state;
      }
      return { ...state, user: action.payload, isLogged: true };
    case LOG_OUT:
      return {
        isLogged: false,
        user: {},
      };
    default:
      return state;
  }
};

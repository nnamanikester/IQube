import { combineReducers } from "redux";
import auth from "./auth";
import { AuthState } from "./auth/types";
import colors from "./colors";
import { ColorsState } from "./colors/types";
import isDark from "./isDark";
import { IsDarkState } from "./isDark/types";

export interface IRootState {
  auth: AuthState,
  colors: ColorsState,
  isDark: IsDarkState,
}

export default combineReducers<IRootState>({
  auth,
  colors,
  isDark,
});

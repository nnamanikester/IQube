import AsyncStorage from "@react-native-community/async-storage";
import { STORAGE_DARK_MODE } from "../../constants";
import { ISetDarkModeAction, SET_DARK_MODE } from "./types";

export function setDarkMode(mode: boolean): (dispatch: any) => Promise<ISetDarkModeAction> {
  return async (dispatch: any): Promise<ISetDarkModeAction> => {
    await AsyncStorage.setItem(STORAGE_DARK_MODE, `${mode}`);
    return dispatch({ type: SET_DARK_MODE, payload: mode });
  };
};

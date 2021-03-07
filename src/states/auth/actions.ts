import AsyncStorage from '@react-native-community/async-storage';
import { AuthActionTypes, LOG_OUT, SET_USER, IUserPayload } from './types';
import { STORAGE_USER, STORAGE_DARK_MODE } from '<root>/constants';

export function setUser(user: IUserPayload): (dispatch: any) => Promise<AuthActionTypes> {
  return async (dispatch: any): Promise<AuthActionTypes> => {
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));
    return dispatch({ type: SET_USER, payload: user });
  };
}

export function logOut(mode: boolean): (dispatch: any) => Promise<AuthActionTypes> {
  return async (dispatch: any): Promise<AuthActionTypes> => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(STORAGE_DARK_MODE, `${mode}`);
    return dispatch({ type: LOG_OUT });
  };
};


export const LOG_OUT = "LOG_OUT";
export const SET_USER = "SET_USER";

export interface IUserPayload {
  email?: string,
}

export interface AuthState {
  isLogged: boolean,
  user: IUserPayload,
}

export interface ISetUserAction {
  type: typeof SET_USER,
  payload: IUserPayload,
}

export interface ILogOutAction {
  type: typeof LOG_OUT,
}

export type AuthActionTypes = ISetUserAction | ILogOutAction;

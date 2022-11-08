import * as types from "./actionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});
export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});
export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const createUsersStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});
export const createUsersSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});
export const createUsersError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUsersStart = (userID) => ({
  type: types.DELETE_USER_START,
  payload: userID,
});
export const deleteUsersSuccess = (userID) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userID,
});
export const deleteUsersError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

export const updateUsersStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});
export const updateUsersSuccess = (userID) => ({
  type: types.UPDATE_USER_SUCCESS,
});
export const updateUsersError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

export const searchUsersStart = (users) => ({
  type: types.SEARCH_USER_START,
  payload: users,
});
export const searchUsersSuccess = (users) => ({
  type: types.SEARCH_USER_SUCCESS,
  payload: users,
});
export const searchUsersError = (error) => ({
  type: types.SEARCH_USER_ERROR,
  payload: error,
});

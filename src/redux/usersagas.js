import * as types from "./actionTypes";
import {
  takeEvery,
  put,
  all,
  fork,
  call,
  takeLatest,
  take,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersError,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
  updateUsersSuccess,
  updateUsersError,
} from "./actions";
import {
  createUserApi,
  deleteUserApi,
  loadUsersApi,
  updateUserApi,
} from "./api";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);

    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error));
  }
}
function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);

    if (response.status === 201) {
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error));
  }
}
function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);

    if (response.status === 200) {
      yield put(deleteUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(deleteUsersError(error));
  }
}
function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response.status === 200) {
      yield put(updateUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUsersError(error));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}
function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}
function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

function* onDeleteUser() {
  while (true) {
    const { payload } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, payload);
  }
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];
export default function* rootSaga() {
  yield all([...userSagas]);
}

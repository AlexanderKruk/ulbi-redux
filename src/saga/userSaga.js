import { put, call, takeEvery } from "redux-saga/effects";
import {
  addManyCustomerAction,
  ADD_CUSTOMER_SAGA,
} from "../store/customerReducer";

const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* userWorker() {
  const data = yield call(fetchUsers);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addManyCustomerAction(json));
}

export function* userWatcher() {
  yield takeEvery(ADD_CUSTOMER_SAGA, userWorker);
}

import { all } from "redux-saga/effects";
import { countWatcher } from "../saga/countSaga";
import { userWatcher } from "../saga/userSaga";

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}

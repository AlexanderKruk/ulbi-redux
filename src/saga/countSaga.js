import { put, takeEvery } from "redux-saga/effects";
import {
  incrementSagaCreator,
  decrimentSagaCreator,
  INCRIMENT_SAGA,
  DECRIMENT_SAGA,
} from "../store/cashReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementSagaCreator());
}

function* decrimentWorker() {
  yield delay(1000);
  yield put(decrimentSagaCreator());
}

export function* countWatcher() {
  yield takeEvery(INCRIMENT_SAGA, incrementWorker);
  yield takeEvery(DECRIMENT_SAGA, decrimentWorker);
}

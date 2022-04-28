const initialState = {
  count: 0,
};

export const INCRIMENT_SAGA = "INCRIMENT_SAGA";
export const DECRIMENT_SAGA = "DECRIMENT_SAGA";

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, count: state.count + 1 };
    }
    case "DEL": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

export const incrementSagaCreator = () => ({ type: "ADD" });
export const decrimentSagaCreator = () => ({ type: "DEL" });

export const asyncIncrementSagaCreator = () => ({ type: INCRIMENT_SAGA });
export const asyncDecrimentSageCreator = () => ({ type: DECRIMENT_SAGA });

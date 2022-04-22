const initialState = {
  count: 0,
};

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, count: state.count + action.payload };
    }
    case "DEL": {
      return { ...state, count: state.count - action.payload };
    }
    default:
      return state;
  }
};

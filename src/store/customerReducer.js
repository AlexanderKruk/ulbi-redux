const initialState = {
  customer: [],
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return { ...state, customer: [...state.customer, ...action.payload] };
    }
    case "DEL_CUSTOMER": {
      return { ...state, count: state.customer };
    }
    default:
      return state;
  }
};

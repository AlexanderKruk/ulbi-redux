const initialState = {
  customer: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DEL_CUSTOMER = "DEL_CUSTOMER";

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {
      return { ...state, customer: [...state.customer, action.payload] };
    }
    case DEL_CUSTOMER: {
      return {
        ...state,
        customer: state.customer.filter((item) => action.payload !== item.id),
      };
    }
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});
export const delCustomerAction = (payload) => ({
  type: DEL_CUSTOMER,
  payload,
});

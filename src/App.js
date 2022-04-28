import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  delCustomerAction,
  addCustomerSagaAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./store/asyncActions/customer";
import {
  asyncIncrementSagaCreator,
  asyncDecrimentSageCreator,
} from "./store/cashReducer";

function App() {
  const count = useSelector((state) => state.cash.count);
  const customer = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();

  const handlerAdd = (payload) => dispatch({ type: "ADD", payload });
  const handlerDelete = (payload) => dispatch({ type: "DEL", payload });

  const handlerAddCustomer = (name) => {
    dispatch(addCustomerAction({ name, id: Date.now() }));
  };

  const handlerDeleteCustomer = (id) => dispatch(delCustomerAction(id));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(asyncIncrementSagaCreator())}>ADD</button>
      <button onClick={() => dispatch(asyncDecrimentSageCreator())}>DEL</button>
      <button onClick={() => handlerAddCustomer(prompt())}>Add Customer</button>
      <button onClick={() => dispatch(addCustomerSagaAction())}>
        Add Many Customers
      </button>
      {customer.length > 0 ? (
        customer.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid", margin: "5px", padding: "5px" }}
            onClick={() => handlerDeleteCustomer(item.id)}
          >
            {item.name}
          </div>
        ))
      ) : (
        <div>Clients not exists</div>
      )}
      <div></div>
    </div>
  );
}

export default App;

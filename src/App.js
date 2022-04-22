import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handlerAdd = (payload) => dispatch({ type: "ADD", payload });
  const handlerDelete = (payload) => dispatch({ type: "DEL", payload });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handlerAdd(Number(prompt()))}>ADD</button>
      <button onClick={() => handlerDelete(Number(prompt()))}>DEL</button>
    </div>
  );
}

export default App;

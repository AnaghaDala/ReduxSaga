import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./redux/dataSlice";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  return (
    <div>
      <h1>Redux Saga Data Fetching</h1>
      <button onClick={() => dispatch(fetchDataRequest())}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

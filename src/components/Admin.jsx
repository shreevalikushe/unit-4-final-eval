import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataError, getDataLoading, getDataSuccess } from "../store/actions";

export function Admin() {
  const { loading, error, data } = useSelector((state) => ({
    error: state.error,
    loading: state.loading,
    data: state.data,
  }));
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(getDataLoading());
    fetch("http://localhost:3001/employee")
      .then((r) => r.json())
      .then((r) => dispatch(getDataSuccess(r)))
      .catch((e) => getDataError());
  };
  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <h1>...loading</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : (
    <div>
      <h4>
        <i>ADMIN PAGE</i>
      </h4>

      {data.map((e) => (
        <div
          key={e.id}
          style={{
            flexDirection: "row",
            display: "flex",
            border: "1px solid black",
            // justifyItems: "center",
            padding: "0.2rem",
            justifyContent: "center",
            margin: "auto",
            width: "900px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <h3>Name: {e.clientName}</h3>
            <h3>Date: {e.date}</h3>
            <h3>Purpose: {e.purpose}</h3>
            <h3>Amount:{e.amount}</h3>
            <h3>Status:{e.status ? "DONE" : "PENDING"} </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

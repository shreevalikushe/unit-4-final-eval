import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postDataError,
  postDataLoading,
  postDataSuccess,
} from "../store/actions";

export function Employee() {
  const [form, setForm] = useState({
    clientName: "",
    date: "",
    purpose: "",
    amount: "",
    status: false,
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    dispatch(postDataLoading());
    fetch("http://localhost:3001/employee", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(postDataSuccess(res)))
      .catch((err) => dispatch(postDataError(err)));
  }
  const { loading, error, data } = useSelector((state) => ({
    error: state.error,
    loading: state.loading,
    data: state.data,
  }));
  const dispatch = useDispatch();
  return (
    <div>
      <h2>This is the employee page</h2>
      <h4>Fill in the form to claim reimbursements</h4>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
          padding: "1rem",
          gap: "1rem",
          border: "1px solid black",
        }}
      >
        <div>
          Name:
          <input
            placeholder="Enter Name"
            type="text"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
          />
        </div>
        <div>
          Date of claim/reimbursement:{" "}
          <input
            name="date"
            placeholder="Date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          Purpose of the claim:{" "}
          <input
            name="purpose"
            placeholder="Purpose of the claim"
            type="text"
            value={form.purpose}
            onChange={handleChange}
          />
        </div>
        <div>
          Amount to be paid:{" "}
          <input
            name="amount"
            placeholder="Amount to be paid"
            type="number"
            value={form.amount}
            onChange={handleChange}
          />
        </div>

        <button onClick={() => handleSubmit()}>Submit</button>
      </form>
      {loading ? (
        <h3>...loading</h3>
      ) : error ? (
        <h3>something went wrong in form uploading</h3>
      ) : (
        <h3>form data submitted</h3>
      )}
      {console.log(data)}
    </div>
  );
}

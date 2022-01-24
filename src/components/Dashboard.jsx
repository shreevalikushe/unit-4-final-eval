import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center",
        backgroundColor: "#D885A3",
        color: "#D3DEDC",
        height: "30px",
        padding: "1rem",
      }}
    >
      <Link to="/employee">Employee Page</Link>
      <Link to="employeeDetails">Employee Reimbursement Details</Link>
      <Link to="/admin">Admin Page</Link>
    </div>
  );
}

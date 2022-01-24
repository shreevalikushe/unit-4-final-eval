import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import { Employee } from "./Employee";
import { ReimbursementDetails } from "./ReimbursementDetails";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/employeeDetails" element={<ReimbursementDetails />} />
    </Routes>
  );
}

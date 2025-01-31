import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyRegisterPage from "./components/Register/CompanyRegisterPage";
import RegisterEmployee from "./components/Register/RegisterEmployeePage";
import RegisterCustomer from "./components/Register/RegisterCustomer";
import Login from "./components/LoginPage";
import CompanyDashboard from "./components/Dashboard/CompanyDashboard";
import ClientDashboard from "./components/Dashboard/ClientDashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import OfficeList from "./components/Dashboard/OfficeList";
import Reports from "./components/Dashboard/Reports";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register/company" element={<CompanyRegisterPage />} />
          <Route path="/register/employee" element={<RegisterEmployee />} />
          <Route path="/register/clients" element={<RegisterCustomer />} />

          <Route element={<ProtectedRoute allowedRoles={["company"]} />}>
          <Route path="/dashboard/company" element={<CompanyDashboard />} />
          <Route path="/dashboard/company/offices" element={<OfficeList />} />
          <Route path="/dashboard/company/reports" element={<Reports />} />
        </Route>

          <Route element={<ProtectedRoute allowedRoles={["employee"]} />}>
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
            <Route path="/client-dashboard" element={<ClientDashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

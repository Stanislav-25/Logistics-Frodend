import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Company Dashboard</h1>

      {/* Navigation */}
      <div className="mt-4 space-y-2">
        <button
          onClick={() => navigate("/dashboard/company/employees")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Manage Employees
        </button>
        <button
          onClick={() => navigate("/dashboard/company/offices")}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Manage Offices
        </button>
        <button
          onClick={() => navigate("/dashboard/company/reports")}
          className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          View Reports
        </button>
        <button
          onClick={() => logout(navigate)}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default CompanyDashboard;

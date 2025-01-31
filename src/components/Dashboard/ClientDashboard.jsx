import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const ClientDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Client Dashboard</h1>
      <p>Welcome, Valued Client!</p>

      <button
        onClick={() => logout(navigate)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ClientDashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginEndpoints = {
  company: "/api/companies/account/login",
  employee: "/api/login/employee",
  client: "/api/login/client"
};

// Dashboard routes for each role
const dashboardRoutes = {
  company: "/dashboard/company",
  employee: "/employee-dashboard",
  client: "/client-dashboard"
};

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("company");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", role);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const endpoint = loginEndpoints[role];
    
    try {
      const response = await axios.post(endpoint, { name, password });
      
      // Assuming the backend returns { token, user } structure
      const { token, user } = response.data;
      
      // Set the token in axios headers and localStorage
      setAuthToken(token);
      
      // Store user data
      localStorage.setItem("user", JSON.stringify(user));
      
      // Redirect to appropriate dashboard
      navigate(dashboardRoutes[role]);
      
      console.log("Login successful:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Login failed. Please check your credentials."
      );
      console.error("Login error:", err);
      setAuthToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Check for existing token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("userRole");
    if (token && savedRole) {
      navigate(dashboardRoutes[savedRole]);
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Login as</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={isLoading}
            >
              <option value="company">Company</option>
              <option value="employee">Employee</option>
              <option value="client">Client</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg transition duration-300 ${
              isLoading 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
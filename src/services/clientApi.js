import axios from "axios";

// Base Axios Instance
const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// API for Client-specific Endpoints
export const clientApi = {
  getProfile: async () => {
    const token = localStorage.getItem("jwt");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const response = await api.get("/api/clients/account", { headers });
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Error fetching profile");
    }
  },
};

export default api;

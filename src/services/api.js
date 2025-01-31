import axios from "axios";

// Base Axios Instance
const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// API for Company-specific Endpoints
export const companyApi = {
  getProfile: async () => {
    const response = await api.post("/api/companies/account/login");
    console.log(response.data);
    return response.data;
  },
};

// API for Employee-specific Endpoints
export const employeeApi = {
  getProfile: async () => {
    const response = await api.post("/api/employee/account");
    return response.data;
  },
};

// API for Client-specific Endpoints
export const clientApi = {
  getProfile: async () => {
    const response = await api.post("/api/clients/account/login");
    return response.data;
  },
};

export default api;

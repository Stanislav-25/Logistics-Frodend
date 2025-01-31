export const logout = (navigate) => {
  // Remove token and user data
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  localStorage.removeItem("user");

  // Redirect to login page
  navigate("/login");
};

import { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    axios.get("/api/companies/report ")
      .then(response => setRevenue(response.data.total))
      .catch(error => console.error("Error fetching revenue:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Revenue Reports</h2>
      <p className="text-lg">Total Revenue: <strong>${revenue}</strong></p>
    </div>
  );
};

export default Reports;

import { useEffect, useState } from "react";
import axios from "axios";

const OfficeList = () => {
  const [offices, setOffices] = useState([]);
  const [newOffice, setNewOffice] = useState({ address: "", phoneNumber: "" });

  useEffect(() => {
    axios.get("/api/companies/offices")
      .then(response => setOffices(response.data))
      .catch(error => console.error("Error fetching offices:", error));
  }, []);

  const handleCreateOffice = () => {
    axios.post("/api/companies/offices/add", { ...newOffice, companyId:1 }) // Adjust companyId dynamically
      .then(response => setOffices([...offices, response.data]))
      .catch(error => console.error("Error creating office:", error));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Offices</h2>
      <ul>
        {offices.map((office) => (
          <li key={office.id} className="p-2 border-b">
            {office.address} - {office.phoneNumber}
          </li>
        ))}
      </ul>

      {/* Create Office */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Add New Office</h3>
        <input
          type="text"
          placeholder="Address"
          value={newOffice.address}
          onChange={(e) => setNewOffice({ ...newOffice, address: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newOffice.phoneNumber}
          onChange={(e) => setNewOffice({ ...newOffice, phoneNumber: e.target.value })}
          className="p-2 border rounded w-full mt-2"
        />
        <button
          onClick={handleCreateOffice}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Create Office
        </button>
      </div>
    </div>
  );
};

export default OfficeList;

import React, { useEffect, useState } from "react";

const API_URL = "/employee/v1/"; // Uses the proxy in package.json

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    age: "",
    designation: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("Fetched employees:", data); // Log the response data
      if (Array.isArray(data)) {
        setEmployees(data);
      } else {
        console.error("API response is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addEmployee = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>
      <div>
        <h2>Add Employee</h2>
        {Object.keys(newEmployee).map((key) => (
          <input
            key={key}
            placeholder={key.replace("_", " ").toUpperCase()}
            value={newEmployee[key]}
            onChange={(e) => setNewEmployee({ ...newEmployee, [key]: e.target.value })}
            style={{ margin: "5px", padding: "8px" }}
          />
        ))}
        <button onClick={addEmployee}>Add</button>
      </div>
      <h2>Employees</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.first_name} {emp.last_name}</td>
                <td>{emp.designation}</td>
                <td>{emp.phone_number}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
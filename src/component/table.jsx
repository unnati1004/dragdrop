import React, { useState } from "react";

export const Table = () => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([...rows, { id: rows.length }]);
  };

  return (
    <div>
      <table id="myList">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>ID</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Role</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="form-group" style={{ position: "relative" }}>
                {row.id + 1}
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
              <td className="form-group" style={{ position: "relative" }}>
                <input type="text" placeholder="Enter your ID" />
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
              <td className="form-group" style={{ position: "relative" }}>
                <input type="text" placeholder="Enter your Rank" />
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
              <td className="form-group" style={{ position: "relative" }}>
                <input type="text"
                placeholder="Enter Your Name"
                />
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
              <td className="form-group" style={{ position: "relative" }}>
                <input type="text" 
                placeholder="Enter your Role"
                />
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
              <td className="form-group" style={{ position: "relative" }}>
                <select >
                  <option value="" disabled selected hidden>Select Party</option>
                  <option value="user">Recce Party</option>
                  <option value="admin">Setting Out Party</option>
                  <option value="admin">Marking Party</option>
                  <option value="admin">Laying Party</option>
                  <option value="admin">Navigation Party</option>
                  <option value="admin">Harbor Party</option>
                  <option value="admin">Other</option>
                </select>
                <div
                  className="justify-content-center"
                  style={{ position: "absolute", width: "100%", left: "50%" }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

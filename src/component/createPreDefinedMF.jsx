import React, { useState } from "react";

const CreatePreDefinedMF = ()=>{
    const [rows, setRows] = useState([]);
    const [typeOfPoint,setTypeOfPoint] = useState({
        LM : false,
        strip: false,
        perimeter: false,
        mine: false,
    })

    const addRow = () => {
      setRows([...rows, { id: rows.length }]);
    };
  
    return (
        <div>
        <table id="myList">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Alt</th>
              <th>Type of Point</th>
              <th>Sub Type</th>
              <th>Parameter</th>
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
                  <input type="text" placeholder="Enter Lat" />
                  <div
                    className="justify-content-center"
                    style={{ position: "absolute", width: "100%", left: "50%" }}
                  ></div>
                </td>
                <td className="form-group" style={{ position: "relative" }}>
                  <input type="text" placeholder="Enter Long" />
                  <div
                    className="justify-content-center"
                    style={{ position: "absolute", width: "100%", left: "50%" }}
                  ></div>
                </td>
                <td className="form-group" style={{ position: "relative" }}>
                  <input type="text"
                  placeholder="Enter Alt"
                  />
                  <div
                    className="justify-content-center"
                    style={{ position: "absolute", width: "100%", left: "50%" }}
                  ></div>
                </td>
                <td className="form-group" style={{ position: "relative" }}>
                  <select >
                    <option value="" disabled selected hidden>Enter Type of Point</option>
                    <option value="LM">LM</option>
                    <option value="strip">Strip</option>
                    <option value="perimeter">Perimeter</option>
                    <option value="mine">Mine</option>
                  </select>
                  <div
                    className="justify-content-center"
                    style={{ position: "absolute", width: "100%", left: "50%" }}
                  ></div>
                </td>
                <td className="form-group" style={{ position: "relative" }}>
                <select >
                    <option value="" disabled selected hidden>Enter SubType of Point</option>
                    {typeOfPoint.LM?
                    <>
                    <option value="RA">RA</option>
                    <option value="LM">LM</option>
                    <option value="IMLM">IMLM</option>
                    </>
                    :typeOfPoint.strip?
                    <>
                    <option value="Strip A">Strip A</option>
                    <option value="Strip B">Strip B</option>
                    <option value="Strip C">Strip C</option>
                    </>:typeOfPoint.perimeter?
                    <>
                    <option value="ISL">ISL</option>
                    <option value="VSL">VSL</option>
                    <option value="Perimeter">Perimeter</option>
                    </>:typeOfPoint.mine?
                    <>
                      <option value="AP">AP</option>
                      <option value="AT">AT</option>
                      <option value="Fragment">Fragment</option>
                      <option value="AP_NMM14">AP NMM14</option>
                      <option value="AP_Nipun">AP Nipun</option>
                      <option value="AT_ND_MK-I">AT ND MK-I</option>
                      <option value="AT_Vibhav">AT Vibhav</option>
                      <option value="AT_ND_MK-III">AT ND MK-III</option>
                      <option value="AP_Fragmentation_M-16">AP Fragmentation M-16</option>
                      <option value="AP_Fragmentation_Ulka">AP Fragmentation Ulka</option>
                    </>:<></>
                    }
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
    )
}
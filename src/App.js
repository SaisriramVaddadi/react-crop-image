import React, { useState } from "react";
import FileUploader from "./Components/FileUploader";

function App() {
  const [filesData, setFilesData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  return (
    <div className="App">
      <FileUploader setFilesData={setFilesData} />
      <table style={{ marginTop: "2em" }}>
        <tbody>
          <tr>
            <th style={{ width: "50%" }}>name</th>
            <th style={{ width: "25%" }}>type</th>
            <th style={{ width: "25%" }}>size</th>
          </tr>
          {filesData.length > 0 &&
            filesData
              .slice((page - 1) * perPage, page * perPage)
              .map((file, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "50%" }}>{file.name}</td>
                    <td style={{ width: "25%" }}> {file.type}</td>
                    <td style={{ width: "25%" }}>{file.size}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <div
        style={{
          display: filesData.length ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2em",
          width: "30%",
        }}
      >
        <button
          style={{
            height: "1em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setPage((prev) => --prev)}
          disabled={page === 1}
        >
          {"<"}
        </button>
        <p style={{ width: "100%" }}>Page no: {page}</p>
        <button
          style={{
            height: "1em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setPage((prev) => ++prev)}
          disabled={page >= filesData.length / perPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default App;

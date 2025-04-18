import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://backend-service:5000/api/data")
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Data from Flask Backend:</p>
      <pre>{data}</pre>
    </div>
  );
}

export default App;

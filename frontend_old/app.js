import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://task-manager-backend.onrender.com/api/"; // <-- तुझा backend URL

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Task Manager 🚀</h1>
      {data.map((item, index) => (
        <p key={index}>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
}

export default App;
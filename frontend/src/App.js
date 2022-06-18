import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  return (
    <div>
      <h1>Hello</h1>
      <h2>My name is {userName}</h2>
    </div>
  );
}

export default App;

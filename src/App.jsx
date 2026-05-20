import { useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  const getMessage = async () => {

    const response = await fetch(
      "http://localhost:8080/demo/hello"
    );

    const data = await response.json();

    setMessage(data.message);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Spring Boot</h1>

      <button onClick={getMessage}>
        Get Message
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
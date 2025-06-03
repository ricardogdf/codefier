import { useState } from "react";
import MatrixCanvas from "./Components/MatrixCanvas";
import { customEncode, customDecode } from "./utils/encoder";
import "./styles/App.css";
import { Terminal } from "./Components/Terminal";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
  }

  function handleEncode() {
    setOutput(customEncode(input));
  }
  function handleDecode() {
    setOutput(customDecode(input));
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <MatrixCanvas />
      <h1 className="title">[ console: codifier.exe ]</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <div className="terminal-box">
          <label>&gt; Code:</label>
          <Terminal value={input} handleValueChange={handleInputChange} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button className="encode-button" onClick={handleEncode}>
            Codificar
          </button>
          <button className="decode-button" onClick={handleDecode}>
            Decodificar
          </button>
        </div>

        <div className="terminal-box">
          <label>&gt; Result:</label>
          <Terminal value={output} copy readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;

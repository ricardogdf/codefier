import { useState, useEffect } from "react";
import MatrixCanvas from "./Components/MatrixCanvas";
import { customEncode, customDecode } from "./utils/encoder";
import "./App.css";
import { Terminal } from "./Components/Terminal";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [sound] = useState(new Audio("/typing.mp3")); // coloque esse áudio em `public/typing.mp3`

  useEffect(() => {
    sound.volume = 0.2;
  }, [sound]);

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
    setOutput(customEncode(value));

    sound.currentTime = 0;
    sound.play();
  }

  function handleDecode() {
    setInput(customDecode(output));
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
          <label>&gt; Código:</label>
          <Terminal />
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="decode-button" onClick={handleDecode}>
              Codificar
            </button>
            <button className="decode-button" onClick={handleDecode}>
              Decodificar
            </button>
          </div>
        </div>

        <div className="terminal-box">
          <label>&gt; Resultado:</label>
          <textarea className="terminal-output" value={output} readOnly />
          <button className="decode-button" onClick={handleDecode}>
            Copiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

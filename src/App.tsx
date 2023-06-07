import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
    });

  }, []);

  const URL = "https://app.ruist.com/l/goEx"

  const onClick = () => {
    const payload = {
      eventSourceKey: "incoming",
      data: {
        var: "hello"
      }
    }
    window.postMessage(payload,URL)
  }

  return (
    <div className="App">
      <header className="App-header">hello</header>
      <button className="button" onClick={onClick}>send data to airkit</button>
    </div>
  );
}

export default App;

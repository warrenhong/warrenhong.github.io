import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
    });

  }, []);

  const URL = "https://app.ruist.com/l/goFD"

  const onClick = () => {
    const payload = {
      eventSourceKey: "incoming",
      data: {
        var: "hello"
      }
    }
    window.postMessage(payload,URL)
    window.parent.postMessage(payload,URL)

    const d = (document.getElementById("iframe") as HTMLIFrameElement).contentWindow
    d?.postMessage(payload,URL)
  }

  return (
    <div className="App">
      <header className="App-header">YOOOO</header>
      <button className="button" onClick={onClick}>send data to airkit</button>
      <iframe src={URL} title={"de"} id={"iframe"}/>
    </div>
  );
}

export default App;

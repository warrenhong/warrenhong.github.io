import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    window.addEventListener("message", (event) => {console.log(event)})
  },[])

  return (
    <div className="App">
      <header className="App-header">
       hello
      </header>
    </div>
  );
}

export default App;

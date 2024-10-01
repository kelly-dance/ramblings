import React from 'react';
import logo from './baursak.png';

function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <img src={logo} alt="Logo" width="200px" />
    </div>
  );
}

export default App;

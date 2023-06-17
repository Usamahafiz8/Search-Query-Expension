import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";

function App() {
  return (
    <div >
      {/* <header className="App-header"> */}
        <h2 style={{ textTransform: "uppercase" , textAlign:"center", fontSize:"36px"}}>
          Query Expansion for code search
        </h2>
      {/* </header> */}
      <div style={{ padding: "20px" }}>
        <QueryResults />
      </div>
      <footer className="App-footer">
        <CopyRightMArk />
      </footer>
    </div>
  );
}

export default App;

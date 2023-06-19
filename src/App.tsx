import React from "react";
import "./App.css";
import { CopyRightMArk } from "./components/copyRight";
import { QueryResults } from "./components/queryResults";

function App() {
  return (
    <div>
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "36px",
          color:" #AB7442"
        }}
      >
        Query Expansion for code search
      </h2>
      <div style={{ padding: "24px" }}>
        <QueryResults />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Utils from "./components/Utils";
import BGchanger from "./components/BGchanger";

function App() {
  const [col, setCol] = useState([255, 255, 255]);
  return (
    <div style={{ color: `rgb(${col.map((x) => 255 - x).join(",")})` }}>
      <Utils col={col} />
      <BGchanger handelCol={(c) => setCol(c)} />
    </div>
  );
}

export default App;

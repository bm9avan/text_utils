import { useState } from "react";
import Utils from "./components/Utils";
import BGchanger from "./components/BGchanger";

function App() {
  const [col, setCol] = useState("blue");
  return (
    <div className="text-white">
      <Utils col={col} />
      <BGchanger handelCol={(c) => setCol(c)} col={col} />
    </div>
  );
}

export default App;

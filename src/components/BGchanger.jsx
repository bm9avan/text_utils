import { useEffect, useState } from "react";
import Border from "../UI/Border";

const BGchanger = ({ handelCol }) => {
  const arr = ["red", "green", "blue"];
  const [r, sr] = useState(255);
  const [g, sg] = useState(200);
  const [b, sb] = useState(100);
  useEffect(() => {
    const t = setTimeout(handelCol([r, g, b]), 1000);
    return clearTimeout(t);
  }, [r, g, b]);
  return (
    <div className="justify-center flex">
      <div className="fixed flex flex-col items-center justify-center bottom-20">
        {arr.map((c) => (
          <div key={c} className="grid grid-cols-2 gap-0">
            <label htmlFor={c}>{c}</label>
            <input
              type="range"
              name={c}
              id={c}
              max={255}
              value={c === "red" ? r : c === "blue" ? b : g}
              onChange={(e) =>
                c === "red"
                  ? sr(e.target.value)
                  : c === "blue"
                  ? sb(e.target.value)
                  : sg(e.target.value)
              }
            />
          </div>
        ))}
      </div>

      <Border className="fixed flex flex-row items-center justify-center bottom-10">
        {arr.map((c) => (
          <span
            className={`m-1 cursor-pointer p-1 px-2 shadow-lg rounded-xl`}
            style={{
              background: `rgb(${c === "red" ? r : 0}, ${
                c === "green" ? g : 0
              },${c === "blue" ? b : 0})`,
            }}
            key={c}
          ></span>
        ))}
      </Border>
      <div className="fixed bottom-1 grid grid-cols-2">
        <span className="px-2">bgColor: rgb({[r, g, b].join(",")})</span>
        <span className="px-2">
          textColor: rgb({[r, g, b].map((c) => 255 - c).join(",")})
        </span>
      </div>
    </div>
  );
};

export default BGchanger;

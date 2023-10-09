import Border from "../UI/Border";

const BGchanger = ({ handelCol, col }) => {
  const arr = ["blue", "red", "green"];
  return (
    <div className="justify-center flex">
      <Border className="fixed flex flex-row items-center justify-center bottom-10">
        {arr.map((c) => (
          <span
            className={`m-1 cursor-pointer p-1 px-2 shadow-lg rounded-xl`}
            style={{ background: c }}
            key={c}
            onClick={() => handelCol(c)}
          >
            {col === c && <Border className="p-1">{c}</Border>}
            {col !== c && c}
          </span>
        ))}
      </Border>
    </div>
  );
};

export default BGchanger;

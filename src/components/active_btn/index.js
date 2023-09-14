import { useState } from "react";

const ActiveButtonGroup = () => {
  const [active, setActive] = useState([]);
  const clickHandler = (id) => {
    if (active.includes(id)) {
      setActive(active.filter((buttonId) => buttonId !== id));
    } else {
      setActive([...active, id]);
    }
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2 gap-y-2 flex-wrap">
        {active_btn_data.map((item) => (
          <button
            onClick={() => clickHandler(item.id)}
            className={` flex flex-1 text-center items-center py-2 px-2  justify-center  text-sm hover:bg-[#809fb8] rounded-md ring-1 ring-[#809FB8] ${
              active.includes(item.id) ? "bg-[#809fb8]" : ""
            }`}
            value={item.value}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActiveButtonGroup;

const active_btn_data = [
  { name: "prompt1", id: 1, value: "1" },
  { name: "prompt2", id: 2, value: "2" },
  { name: "prompt3", id: 3, value: "3" },
  { name: "prompt4", id: 4, value: "4" },
  { name: "prompt5", id: 5, value: "5" },
  { name: "prompt6", id: 6, value: "6" },
  { name: "prompt7", id: 7, value: "7" },
  { name: "prompt8", id: 8, value: "8" },
];

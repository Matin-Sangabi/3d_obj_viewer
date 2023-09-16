const ActiveButtonGroup = ({
  roofClickHandler,
  wallClickHandler,
  placeClickHandler,
  roof,
  wall,
  place,
}) => {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-2 ">
        <h1 className="text-center">Roof</h1>
        <div className="flex items-center gap-x-2 gap-y-2 flex-auto flex-wrap">
          {roof_btn_data.map((item) => (
            <button
              onClick={() => roofClickHandler(item.value)}
              key={item.id}
              className={` flex flex-1 text-center items-center py-2 px-2  justify-center  text-sm hover:bg-[#809fb8] rounded-md ring-1 ring-[#809FB8] ${
                roof === item.value ? "bg-[#809fb8]" : ""
              }`}
              value={item.value}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center">Wall</h1>
        <div className="flex items-center gap-x-2 gap-y-2 flex-wrap">
          {wall_btn_data.map((item) => (
            <button
              onClick={() => wallClickHandler(item.value)}
              key={item.id}
              className={` flex flex-1 text-center items-center py-2 px-2  justify-center  text-sm hover:bg-[#809fb8] rounded-md ring-1 ring-[#809FB8] ${
                wall === item.value ? "bg-[#809fb8]" : ""
              }`}
              value={item.value}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center">Place</h1>
        <div className="flex items-center gap-x-2 gap-y-2 flex-wrap">
          {place_btn_data.map((item) => (
            <button
              onClick={() => placeClickHandler(item.value)}
              key={item.id}
              className={` flex flex-1 text-center items-center py-2 px-2  justify-center  text-sm hover:bg-[#809fb8] rounded-md ring-1 ring-[#809FB8] ${
                place === item.value ? "bg-[#809fb8]" : ""
              }`}
              value={item.value}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveButtonGroup;

const roof_btn_data = [
  { name: "stone", id: 1, value: "stone roof" },
  { name: "glass", id: 2, value: "glass roof" },
];
const wall_btn_data = [
  { name: "stone", id: 1, value: "stone wall" },
  { name: "glass", id: 2, value: "glass wall" },
];
const place_btn_data = [
  { name: "rural", id: 1, value: "rural place" },
  { name: "sea side", id: 2, value: "seaside place" },
];

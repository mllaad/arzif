import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const FormSelect = ({
  options,
  networkTransMission,
  setNetworkTransMission,
}) => {

  const [selectedOption, setSelectedOption] = useState(options[0]);
  useEffect(() => {
    setNetworkTransMission(options[0])
  },[])
  const [isShow, setIsShow] = useState(false);

  const clickHandle = () => {
    const idRoot = "transmission-network-select";
    const eventHandle = (e) => {
      const isInScope = e.path.some((element) => element.id === idRoot);
      const isToggleBtn = e.target.id === "transmission-network" ? true : false;

      if (!isInScope) {
        setIsShow(false);
        document.removeEventListener("click", eventHandle);
      }
      if (isInScope) {
        if (isToggleBtn) return;

        setSelectedOption(e.target.innerText);
        setNetworkTransMission(e.target.innerText)
        setIsShow(false);
        document.removeEventListener("click", eventHandle);
      }
    };
    setIsShow((show) => !show);
    document.addEventListener("click", eventHandle);
  };
  return (
    <div id="transmission-network-select" className="relative   h-44">
      <div
        id="transmission-network"
        className="flex items-center outline-none border-solid border bg-slate-200 w-full rounded-sm border-zinc-400 px-3 py-2 text-xs cursor-pointer"
        onClick={clickHandle}
      >
        <div className="w-10 pointer-events-none"> {selectedOption}</div>{" "}
        <TiArrowSortedDown
          className={`mt-1 duration-500 transition-transform text-base pointer-events-none ${
            isShow ? " rotate-180" : "  "
          }`}
        />
      </div>

      <ul
        className={`absolute w-full h-32 overflow-scroll scrollbar  opacity-0 transition-all duration-400${
          isShow ? " opacity-100 " : "  invisible"
        }`}
      >
        {options.map((option) => (
          <li
            className="py-2 px-3 cursor-pointer bg-white hover:bg-slate-200"
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormSelect;

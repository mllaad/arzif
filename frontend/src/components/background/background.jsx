import { SlWallet } from "react-icons/sl";
import { SiBitcoincash } from "react-icons/si";

const Background = ({ state, isEpmty, children }) => {
  const effect = {
    true: { filter: " blur(3px)" },
    false: {},
  };

  return (
    <div className="relative">
      <div
        style={{transition: "all 1s" }}
        className={`absolute transition-all duration-500 z-10 top-0 right-0 w-full h-full bg-[#2a263458] ${
          state ? "delay-150 visible" : "delay-150 invisible"
        }`}
      ></div>
      <div
        className="relative w-full  transition-all duration-1000 "
        style={effect[state]}
      >
        <h1 className="text-center py-3 bg-white h-[8vh] "> ارزیف واچ</h1>
        {isEpmty ? (
          <div className="h-[92vh]  bg-slate-200  flex px-5 py-5 relative overflow-scroll">
            {children}
          </div>
        ) : (
          <div className="h-[92vh] bg-slate-100  flex">
            {state ? <BackgroundForm /> : <NotFound />}
          </div>
        )}
      </div>
    </div>
  );
};

const BackgroundForm = () => {
  return (
    <div className="absolute top-0  w-full h-full">
      <div className="h-full flex pb-24">
        <SiBitcoincash className=" text-orange-400 text-7xl m-auto" />
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="m-auto pb-24">
      <SlWallet className="text-orange-300 m-auto text-4xl mb-5" />
      <h3 className="text-center">.هنوز ادرس ولتی اضافه نکرده اید</h3>
    </div>
  );
};

export default Background;

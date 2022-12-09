import { HiOutlinePlus } from "react-icons/hi";

const PageBtn = ({ isShowForm, setIsShowForm }) => {
  const clickHandle = (event) => {
    const _this = event.currentTarget;
    setIsShowForm(true);
    const eventHandle = (e) => {
      const isInScope = e.path.some((element) => element.id === "form-arzif");
      const toggleButton = _this.id === e.target.id;
      if (!isInScope && !toggleButton) {
        setIsShowForm(false);
        document.removeEventListener("mousedown", eventHandle);
      }
    };
    document.addEventListener("mousedown", eventHandle);
  };
  return (
    <div
      id="form-button"
      className="absolute  right-5 bottom-5 bg-orange-400 text-1xl text-white rounded-full p-3 cursor-pointer"
      onClick={clickHandle}
    >
      <HiOutlinePlus
        className={`pointer-events-none transition-transform duration-300  ${
          isShowForm ? "" : "rotate-180"
        }`}
      />
    </div>
  );
};

export default PageBtn;

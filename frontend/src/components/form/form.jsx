import { useState, useRef } from "react";
import FormSelect from "../form-select/form-select";
import { BiCopy } from "react-icons/bi";

import { proxy } from "../../api/proxy";
import { urls } from "../../api/urls";

const Form = ({ state, list, setList, setIsShowForm }) => {
  const copyBtnRef = useRef(null);
  const [valletAdress, setValletAdress] = useState("");
  const [networkTransMission, setNetworkTransMission] = useState("");

  const networks = [
    "BEP2",
    "BEP20",
    "BTC",
    "BCH",
    "DASH",
    "DOGE",
    "ERC20",
    "LTC",
    "TRC20",
    "XRP",
    "TERRA",
    "ONE",
    "SOLANA",
  ];

  const effect = {
    true: { transform: "translateY(17px)" },
    false: { transform: "translateY(440px)" },
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const isExistAddress = list.some((item) => item.address === valletAdress);
    if (!valletAdress) return alert("ادرس خالی است!!");
    if (isExistAddress) return alert("ادرس ولت موجود میباشد");

    const url = urls.getUrl(networkTransMission, valletAdress);
    list.map((item) => console.log(item));
    proxy.get(url).then((vallet) => {
      if (!vallet || vallet.context || vallet.message || vallet.error) {
        alert("سمت سرور مشکل نامشخص");
        console.log("result from server", vallet);
       
      } else {
        setList((list) => {
          return [
            ...list,
            {
              ...vallet,
              address: valletAdress,
              networkType: networkTransMission,
            },
          ];
        });
      }
    });

    setIsShowForm(false);
  };

  const [copy, setCopy] = useState(<BiCopy />);
  const clickCopyHandle = (e) => {
    navigator.clipboard.writeText(valletAdress);
    setCopy(
      <div className="mt-30 text-green-700 h-full absolute -top-1 right-0 text-[13px] font-semibold">
        {" "}
        copied!
      </div>
    );

    setTimeout(() => {
      setCopy(<BiCopy />);
    }, 500);
  };
  return (
    <div
      id="form-arzif"
      className="w-full  z-30 absolute bottom-9 transition-transform duration-1000 "
      style={effect[state]}
    >
      <form
        className="bg-slate-100 w-[90%] m-auto px-3 py-5 rounded-md shadow-2xl "
        onSubmit={submitHandle}
      >
        <div className="relative pb-6">
          <label className="block text-right pb-3" htmlFor="wallet-addres">
            آدرس ولت
          </label>
          <input
            className="outline-none border-solid border w-full rounded-sm bg-slate-200 border-zinc-400 px-2 py-2 text-xs"
            type="text"
            name="wallet-addres"
            id="wallet-addres"
            value={valletAdress}
            onChange={(e) => setValletAdress(e.target.value)}
          />

          <div
            ref={copyBtnRef}
            className=" absolute top-11  right-4 cursor-pointer hover:text-slate-500"
            onClick={clickCopyHandle}
          >
            {copy}
          </div>
        </div>
        <div className="">
          <label
            className="block text-right pb-3"
            htmlFor="transmission-network"
          >
            شبکه انتقال
          </label>
          <FormSelect
            options={networks}
            networkTransMission={networkTransMission}
            setNetworkTransMission={setNetworkTransMission}
          />
        </div>
        <button className="text-center w-full py-3 bg-orange-400 text-white rounded-md">
          ذخیره
        </button>
      </form>
    </div>
  );
};

export default Form;

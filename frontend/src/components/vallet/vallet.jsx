import { useState, useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Vallet = ({ cantainer, editBtn, list, setList }) => {
  return (
    <div className="grid  gap-8 w-full px-0  pb-20">
      {list.map((item, i) => {
        const networkType = item.networkType;
        const address = item.address;
        const balance = item.Balance || item.balance;
        const balances = item.balances || [balance];
        console.log(balance)
        const clickHandle = (event) => {
          const { x, y, right } = event.currentTarget.getBoundingClientRect();

          editBtn.current.style.translate = `${right - 120}px ${y + 20}px`;

          const toggle = () => {
            editBtn.current.parentElement.classList.toggle("invisible");
            editBtn.current.parentElement.classList.toggle("visible");
            cantainer.current.classList.toggle("blur-[1px]");
            editBtn.current.classList.toggle("opacity-0");
            editBtn.current.classList.toggle("opacity-100");
          };
          const show = () => {
            editBtn.current.parentElement.classList.add("visible");
            editBtn.current.parentElement.classList.remove("invisible");
            cantainer.current.classList.add("blur-[1px]");
            editBtn.current.classList.remove("opacity-0");
            editBtn.current.classList.add("opacity-100");
          };
          // toggle();
          const eventHandle = (e) => {
            const deleteId = "delete-wallet";
            const editId = "edit-wallet";

            const isBtnItSelf = event.target.id === e.target.id;
            const isOutScope = e.path.some(
              (element) => element.id === editBtn.current.id
            );
            if (isBtnItSelf) return show();
            if (!isOutScope) {
              toggle();
              document.removeEventListener("click", eventHandle);
            }

            if (e.target.id === deleteId) {
              setList((lists) =>
                lists.filter((list) => list.address !== item.address)
              );
              toggle();
              document.removeEventListener("click", eventHandle);
            }
            // EDIT
            if (e.target.id === editId) return console.log("edit");
          };
          document.addEventListener("click", eventHandle);
        };

        return (
          <div
            key={i}
            className="bg-white text-xs w-full rounded-lg p-4  h-min relative "
          >
            <div className="bg-slate-200 rounded-sm px-4 py-1">
              {item.address}
            </div>
            <div className="flex justify-between pt-5">
              <div className="font-semibold border text-xl border-gray-600 rounded-md px-4 py-1 cursor-pointer">
                {item.networkType}
              </div>
              <div className="text-2xl font-semibold pr-10 cursor-pointer">
                12242.1$
              </div>
            </div>
            <div className="flex flex-wrap pt-7">
              {balances.map((item, i) => {
                console.log(item)
                if (i > 10) return;
                return (
                  <div key={i} className="w-1/2 text-center flex text-sm">
                    <div className="text-[10px] p-2">logo</div>
                    <div className="block">
                      <div className="text-[10px]">
                        {item.symbol || "unknown"}
                      </div>
                      <div className="text-[10px]">
                        {item.free || item.amount || item}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              id="3dot_vallet"
              className="relative cursor-pointer "
              onClick={clickHandle}
            >
              <HiOutlineDotsHorizontal className="ml-auto mr-2 pointer-events-none" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vallet;

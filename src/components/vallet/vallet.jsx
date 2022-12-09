import { useState, useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Vallet = ({ cantainer, editBtn, list, setList }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid gap-8 h-max pb-20">
      {list.map((item) => {
        const clickHandle = (event) => {
          const { x, y, right } = event.currentTarget.getBoundingClientRect();
          console.dir(editBtn.current.parentElement)
          editBtn.current.style.translate = `${right - 120}px ${y + 20}px`;

          const toggle = () => {
            editBtn.current.parentElement.classList.toggle("invisible")
            editBtn.current.parentElement.classList.toggle("visible")
            cantainer.current.classList.toggle("blur-[1px]");
            editBtn.current.classList.toggle("opacity-0");
            editBtn.current.classList.toggle("opacity-100");
          };
          toggle();
          const eventHandle = (e) => {
            const deleteId = "delete-wallet";
            const editId = "edit-wallet";

            const isBtnItSelf = event.target.id === e.target.id;
            const isOutScope = e.path.some(
              (element) => element.id === editBtn.current.id
            );

            if (!isOutScope && !isBtnItSelf) {
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
            key={item.address}
            className="bg-white rounded-lg p-4 w-full h-min relative "
          >
            <div className="bg-slate-200 rounded-sm px-4 py-1">
              {item.address}
            </div>
            <div className="flex justify-between pt-5">
              <div className="font-semibold border border-gray-600 rounded-md px-4 py-1 cursor-pointer">
                {item.type}
              </div>
              <div className="text-2xl font-semibold pr-10 cursor-pointer">
                12242.1$
              </div>
            </div>
            <div className="flex flex-wrap pt-7">
              {arr.map((item) => {
                return (
                  <div key={item} className="w-1/2 text-center flex text-sm">
                    <div className="text-[10px] p-2">logo</div>
                    <div className="block">
                      <div className="text-[10px]">CoinName</div>
                      <div className="text-[10px]">Amount</div>
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

import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
const ValletEdit = ({ editRef }) => {
 
  return (
    <div className="absolute invisible top-0 w-full h-full z-10">
      <div
        ref={editRef}
        id="edit-id-vallet"
        className={` absolute top-0 rounded-md py-1 opacity-0 bg-white transition-opacity duration-500 `}
        style={{
          boxShadow: "1px 0px 15px 2px [#00000022]",
        }}
      >
        <div
          id="edit-wallet"
          className="font-medium flex justify-between items-center py-1 px-6 cursor-pointer"
        >
          <span className="text-sm pointer-events-none">ویرایش </span>
          <FiEdit className="mr-1 pointer-events-none" />
        </div>
        <div className="bg-slate-100 h-[1px] w-full pointer-events-none" />
        <div
          id="delete-wallet"
          className="font-medium flex justify-between py-1 cursor-pointer items-center bg-white px-6 text-red-600"
        >
          <span className="text-sm pointer-events-none">حذف </span>
          <MdOutlineDelete className="text-2xl ml-1 z-50 pointer-events-none" />
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default ValletEdit;

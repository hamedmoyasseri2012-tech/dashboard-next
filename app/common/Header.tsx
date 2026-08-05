"use client"

import { CiMenuBurger } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ show, setShow }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white">
      <div
        onClick={() => setShow(!show)}
        className="text-2xl border w-10 h-8.5 flex justify-center items-center rounded-xl border-[#e5e7eb]"
      >
        <div className="text-gray-600">
          <CiMenuBurger />
        </div>
      </div>
      <div className="flex border justify-center items-center p-2 rounded-full border-[#e5e7eb] bg-[#f3f4f6] w-11.25 h-11.25">
        <i className="text-2xl">
          <CiSearch />
        </i>
      </div>
      <div className="flex gap-2 border rounded-full border-[#e5e7eb] bg-[#e4e4e4] text-[#111928] w-22.75 h-10.5 justify-center items-center">
        <i className=" border p-2 text-xl rounded-full flex items-center justify-center bg-white border-[#e5e7eb]">
          <IoSunnyOutline />
        </i>
        <i className="w-5 h-5">
          <FaRegMoon />
        </i>
      </div>
      <div className="flex border justify-center items-center p-2 rounded-full border-[#e5e7eb] bg-[#f3f4f6] w-11.25 h-11.25">
        <i className="text-xl">
          <IoNotificationsOutline />
        </i>
      </div>
      <div className="flex border justify-center items-center p-2 rounded-full border-[#e5e7eb] bg-[#f3f4f6] w-11.25 h-11.25">
        <i className="text-xl">
          <FaRegUser />
        </i>
      </div>
    </div>
  );
};

export default Header;

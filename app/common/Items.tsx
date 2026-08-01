import { IoEyeOutline } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";
import { BiDollarCircle } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { IoCubeSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";




const Items = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-2">
      <div className="flex flex-col p-4 w-85.75  bg-white h-40 border gap-2 border-[#e5e7eb] rounded-[5px]">
        <div className=" border flex justify-center items-center w-10 h-10 p-6 rounded-full  border-green-500 bg-green-500">
          <i className="text-2xl text-white  ">
            <IoEyeOutline />
          </i>
        </div>
        <h1 className="text-[24px] font-bold ml-1">3.5K</h1>
        <div className="flex justify-between items-center">
          <p className="text-[#9ca3af] text-[14px] font-medium">Total views</p>
          <div className="flex gap-2 items-center text-[#22ad5c]">
            <p>0.43%</p>
            <i>
              <IoMdArrowUp />
            </i>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 w-85.75 bg-white h-40 border gap-2 border-[#e5e7eb] rounded-[5px]">
        <div className=" border flex justify-center items-center w-10 h-10 p-6 rounded-full  border-[#ff9c55] bg-[#ff9c55]">
          <i className="text-2xl text-white  ">
            <BiDollarCircle />
          </i>
        </div>
        <h1 className="text-[24px] font-bold ml-1">4.2K</h1>
        <div className="flex justify-between items-center">
          <p className="text-[#9ca3af] text-[14px] font-medium">Total profit</p>
          <div className="flex gap-2 items-center text-[#22ad5c]">
            <p>4.35%</p>
            <i>
              <IoMdArrowUp />
            </i>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 w-85.75 bg-white h-40 border gap-2 border-[#e5e7eb] rounded-[5px]">
        <div className=" border flex justify-center items-center w-10 h-10 p-6 rounded-full  border-[#8155ff] bg-[#8155ff]">
          <i className="text-2xl text-white  ">
            <IoCubeSharp />
          </i>
        </div>
        <h1 className="text-[24px] font-bold ml-1">3.5K</h1>
        <div className="flex justify-between items-center">
          <p className="text-[#9ca3af] text-[14px] font-medium">
            Total products
          </p>
          <div className="flex gap-2 items-center text-[#22ad5c]">
            <p>2.59%</p>
            <i>
              <IoMdArrowUp />
            </i>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 w-85.75 bg-white h-40 border gap-2 border-[#e5e7eb] rounded-[5px]">
        <div className=" border flex justify-center items-center w-10 h-10 p-6 rounded-full  border-[#18bfff] bg-[#18bfff]">
          <i className="text-2xl text-white  ">
            <HiUsers />
          </i>
        </div>
        <h1 className="text-[24px] font-bold ml-1">3.5K</h1>
        <div className="flex justify-between items-center">
          <p className="text-[#9ca3af] text-[14px] font-medium">Total users</p>
          <div
            className="flex gap-2 items-center text-[#ff2056]"
          >
            <p>0.95%</p>
            <i>
              <FaArrowDown />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

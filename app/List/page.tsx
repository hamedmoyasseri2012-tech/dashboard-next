"use client";

import { CiCirclePlus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

import Image from "next/image";

const List = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-start items-start p-6 gap-2">
        <h1 className="text-[26px] text-[#111928] font-medium">Task List</h1>
        <p className="text-[#6b7280] text-[16px] font-medium">
          Dashboard /
          <span className="text-[#5750f1] font-medium"> Task List</span>
        </p>
        <div className="border w-82 h-25 rounded-[5px] bg-white border-white pl-4 pt-1 gap-1 flex flex-col ">
          <h1 className="text-[28px] text-[#111928] font-medium">Tasks</h1>
          <div className="flex justify-center items-center pr-2 gap-6">
            <div className="flex">
              <div className="-ml-2">
                <Image src="/user6.WEBP" alt="user5" width={36} height={36} />
              </div>
              <div className="-ml-2">
                <Image src="/user7.WEBP" alt="user5" width={36} height={36} />
              </div>
              <div className="-ml-2">
                <Image src="/user8.WEBP" alt="user5" width={36} height={36} />
              </div>
              <div className="-ml-2">
                <Image src="/user9.WEBP" alt="user5" width={36} height={36} />
              </div>
              <div className="border rounded-full w-9 h-9 flex justify-center items-center border-[#e5e7eb] -ml-2">
                <i className="text-[#5750f1]">
                  <CiCirclePlus />
                </i>
              </div>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="flex gap-2 justify-center items-center w-32.75 h-10 bg-[#5750f1] rounded-xl text-white font-medium"
              >
                <i className="text-2xl flex justify-center items-center">
                  <CiCirclePlus />
                </i>
                <p>Add task</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 pt-4">
          <h1 className="text-[20px] text-[#111928] font-medium">To Dos (3)</h1>
          <div className="flex flex-col relative pt-4 pl-4 gap-3 border border-[#e5e7eb] bg-white rounded-[10px] w-82 h-41.5">
            <h1 className="text-[18px] font-medium">Task title</h1>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task one
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task two
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task three
              </p>
            </div>
            <div className="ref={menuRef}">
              <button onClick={() => setOpenMenu(openMenu === 1 ? null : 1)}>
                <i className="absolute top-3 right-4 text-[#71747a] ">
                  <BsThreeDots />
                </i>
              </button>
              {openMenu === 1 && (
                <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                    <div className="text-[#4b5563]">
                      <TiEdit />
                    </div>
                    <p className="text-[#4b5563]">Edit</p>
                  </button>
                  <button className="w-full text-left px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
                    <div className="text-[#4b5563]">
                      <RiDeleteBin6Line />
                    </div>
                    <p className="text-[#4b5563]"> Delete</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 pt-4">
          <div className="flex flex-col relative pt-4 pl-4 gap-3 border border-[#e5e7eb] bg-white rounded-xl w-82 h-40">
            <h1 className="text-[18px] font-medium">Task title</h1>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task one
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task two
              </p>
            </div>
            <button
              className="ref={menuRef}"
              onClick={() => setOpenMenu(openMenu === 2 ? null : 2)}
            >
              <i className="absolute top-3 right-4 text-[#71747a] ">
                <BsThreeDots />
              </i>
            </button>
            {openMenu === 2 && (
              <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                  <div className="text-[#4b5563]">
                    <TiEdit />
                  </div>
                  <p className="text-[#4b5563]">Edit</p>
                </button>
                <button className="w-full text-left px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
                  <div className="text-[#4b5563]">
                    <RiDeleteBin6Line />
                  </div>
                  <p className="text-[#4b5563]"> Delete</p>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 pt-4">
          <div className="flex flex-col relative pt-4 pl-4 gap-3 border border-[#e5e7eb] bg-white rounded-xl w-82 h-31.5">
            <h1 className="text-[18px] font-medium">Task title</h1>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 text-[#e5e7eb] peer" />
              <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                Here is task one
              </p>
            </div>
            <button onClick={() => setOpenMenu(openMenu === 3 ? null : 3)}>
              <i className="absolute top-3 right-4 text-[#71747a] ref={menuRef}">
                <BsThreeDots />
              </i>
            </button>
            {openMenu === 3 && (
              <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                  <div className="text-[#4b5563]">
                    <TiEdit />
                  </div>
                  <p className="text-[#4b5563]">Edit</p>
                </button>
                <button className="w-full text-left px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
                  <div className="text-[#4b5563]">
                    <RiDeleteBin6Line />
                  </div>
                  <p className="text-[#4b5563]"> Delete</p>
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-start items-start gap-3 pt-4">
            <h1 className="text-[20px] text-[#111928] font-medium">
              In Progress (1)
            </h1>
            <div className="flex flex-col relative pt-4 pl-4 gap-3 border border-[#e5e7eb] bg-white rounded-[10px] w-82 h-31.5">
              <h1 className="text-[18px] font-medium">Task title</h1>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#e5e7eb] peer"
                />
                <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                  Here is task one
                </p>
              </div>
              <button onClick={() => setOpenMenu(openMenu === 4 ? null : 4)}>
                <i className="absolute top-3 right-4 text-[#71747a] ref={menuRef}">
                  <BsThreeDots />
                </i>
              </button>
              {openMenu === 4 && (
                <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                    <div className="text-[#4b5563]">
                      <TiEdit />
                    </div>
                    <p className="text-[#4b5563]">Edit</p>
                  </button>
                  <button className="w-full text-left px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
                    <div className="text-[#4b5563]">
                      <RiDeleteBin6Line />
                    </div>
                    <p className="text-[#4b5563]"> Delete</p>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3 pt-4">
            <h1 className="text-[20px] text-[#111928] font-medium">
              Completed (1)
            </h1>
            <div className="flex flex-col relative pt-4 pl-4 gap-3 border border-[#e5e7eb] bg-white rounded-xl w-82 h-40">
              <h1 className="text-[18px] font-medium">Task title</h1>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#e5e7eb] peer"
                />
                <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                  Here is task one
                </p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#e5e7eb] peer"
                />
                <p className="text-[16px] text-[#6b7280] peer-checked:line-through peer-checked:text-gray-400">
                  Here is task two
                </p>
              </div>

              <button onClick={() => setOpenMenu(openMenu === 5 ? null : 5)}>
                <i className="absolute top-3 right-4 text-[#71747a] ref={menuRef}">
                  <BsThreeDots />
                </i>
              </button>
              {openMenu === 5 && (
                <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                    <div className="text-[#4b5563]">
                      <TiEdit />
                    </div>
                    <p className="text-[#4b5563]">Edit</p>
                  </button>
                  <button className="w-full text-left px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
                    <div className="text-[#4b5563]">
                      <RiDeleteBin6Line />
                    </div>
                    <p className="text-[#4b5563]"> Delete</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 gap-3 bg-black/40 flex items-center justify-center p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-180 max-h-[95vh] overflow-y-auto bg-[#f3f4f6] rounded-xl p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-2xl font-medium"
            >
              ✕
            </button>

            <h2 className="text-[16px] text-[#111928] font-medium">
              Task title
            </h2>
            <input
              placeholder="Enter task title"
              className="w-full border border-[#e6ebf1] bg-white rounded-[5px] p-3 outline-[#5750f1]"
            />

            <h2 className="text-[16px] text-[#111928] font-medium">
              Task description
            </h2>
            <textarea
              placeholder="Enter task description border"
              className="w-74 border border-[#e6ebf1] p-2 bg-white rounded-[5px]  h-48.5  outline-[#5750f1]"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Task list
              </h1>
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="Enter list text"
                  className="outline-[#5750f1] bg-white p-3 border border-[#e6ebf1] w-62.5 h-12.5  "
                />
                <button>
                  <i className="text-[24px] flex justify-center items-center border rounded-[5px] w-12.5 h-12.5 border-white bg-white text-[#6f747e]">
                    <CiCirclePlus />
                  </i>
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter list text"
                  className="outline-[#5750f1] bg-white p-3 border border-[#e6ebf1] w-46 h-12.5 "
                />
                <div>
                  <button className="flex gap-1">
                    <i className="text-[24px] flex justify-center items-center border rounded-[5px] w-12.5 h-12.5 border-white bg-white text-[#6f747e]">
                      <CiCircleMinus />
                    </i>
                    <i className="text-[24px] flex justify-center items-center border rounded-[5px] w-12.5 h-12.5 border-white bg-white text-[#6f747e]">
                      <CiCirclePlus />
                    </i>
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter list text"
                  className="outline-[#5750f1] bg-white p-3 border border-[#e6ebf1] w-46 h-12.5 "
                />
                <div>
                  <button className="flex gap-1">
                    <i className="text-[24px] flex justify-center items-center border rounded-[5px] w-12.5 h-12.5 border-white bg-white text-[#6f747e]">
                      <CiCircleMinus />
                    </i>
                    <i className="text-[24px] flex justify-center items-center border rounded-[5px] w-12.5 h-12.5 border-white bg-white text-[#6f747e]">
                      <CiCirclePlus />
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] text-[#111928] font-medium">
                Add image
              </h1>
              <div className="flex flex-col gap-2">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="border w-77 h-30 rounded-[5px] border-[#e6ebf1] bg-white"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const selectedFile = e.target.files?.[0];
                      if (selectedFile) {
                        handleFile(selectedFile);
                      }
                    }}
                  />
                  <div className="flex justify-center items-center flex-col pt-2">
                    <i className=" w-13 h-13 text-2xl border text-center  rounded-full justify-center items-center z-50  flex bg-[#f6f6fe] border-[#e5e7eb]">
                      <MdOutlineFileUpload />
                    </i>
                    <p className="flex justify-center items-center text-[#948ce1]  font-medium">
                      Click to upload
                      <span className="text-[#b7b8bd]">or drag and drop</span>
                    </p>
                  </div>
                </div>
                {file && (
                  <p className="mt-2 text-sm text-gray-600">{file.name}</p>
                )}
                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex gap-2 justify-center items-center w-77.5 h-13 bg-[#5750f1] rounded-xl text-white font-medium"
                  >
                    <i className="text-2xl flex justify-center items-center">
                      <CiCirclePlus />
                    </i>
                    <p>Add task</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;

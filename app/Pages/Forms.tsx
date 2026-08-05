
import { useState } from "react";

const Forms = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col gap-2 ml-6 mr-6">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center  p-2  rounded-[5px]  cursor-pointer"
      >
        <div className="flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="size-6 shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 7A.75.75 0 013 6.25h10a.75.75 0 010 1.5H3A.75.75 0 012.25 7zm14.25-.75a.75.75 0 01.684.442l4.5 10a.75.75 0 11-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 11-1.368-.616l4.5-10a.75.75 0 01.684-.442zm-1.704 6.364h3.408L16.5 8.828l-1.704 3.786zM2.25 12a.75.75 0 01.75-.75h7a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 5a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <p className="text-[#4b5563] font-medium text-[16px]">Forms</p>
        </div>

        <div
          className={`text-[#4b5563] transition-transform duration-300 ${
            show ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="currentColor"
            className="ml-auto rotate-180 transition-transform duration-200"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.553.728a.687.687 0 01.895 0l6.416 5.5a.688.688 0 01-.895 1.044L8 2.155 2.03 7.272a.688.688 0 11-.894-1.044l6.417-5.5z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-end items-end gap-4">
          <ul className="flex flex-col w-40 gap-4">
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Form Elements</p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium  text-[16px] ">
                Pro Form Elements
              </p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Form LayOuts</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Pro Form LayOuts</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forms;

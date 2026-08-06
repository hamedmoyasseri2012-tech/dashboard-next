import { useState } from "react";

const Charts = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col gap-2 ml-5 mr-6">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center  p-2  rounded-[5px] border-[#f3f3fd] cursor-pointer"
      >
        <div className="flex gap-2">
          <div className="text-[#4b5563]">
            <svg
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
                d="M14.254 1.365c-1.096-.306-2.122.024-2.851.695-.719.66-1.153 1.646-1.153 2.7v6.695a2.295 2.295 0 002.295 2.295h6.694c1.055 0 2.042-.434 2.701-1.153.67-.729 1.001-1.755.695-2.851a12.102 12.102 0 00-8.38-8.381zM11.75 4.76c0-.652.27-1.232.668-1.597.386-.355.886-.508 1.433-.355 3.55.991 6.349 3.79 7.34 7.34.153.548 0 1.048-.355 1.434-.365.397-.945.667-1.597.667h-6.694a.795.795 0 01-.795-.795V4.761z"
                fill="currentColor"
              ></path>
              <path
                d="M8.672 4.716a.75.75 0 00-.45-1.432C4.183 4.554 1.25 8.328 1.25 12.79c0 5.501 4.46 9.961 9.96 9.961 4.462 0 8.236-2.932 9.505-6.973a.75.75 0 10-1.43-.45 8.465 8.465 0 01-8.074 5.923 8.46 8.46 0 01-8.461-8.46 8.465 8.465 0 015.922-8.074z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <p className="text-[#4b5563] font-medium text-[16px]">Charts</p>
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
        <div className="flex flex-col justify-end items-end gap-4 ">
          <ul className="flex flex-col w-40 gap-4">
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Basic Chart</p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Advanced Chart</p>
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

export default Charts;

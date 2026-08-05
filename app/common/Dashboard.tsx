"use client";

import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col gap-2 p-6">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center bg-[#f3f3fd] p-2 border rounded-[5px] border-[#f3f3fd] cursor-pointer"
      >
        <div className="flex gap-2">
          <div className="text-[#5750f1]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 shrink-0"
              aria-hidden="true"
            >
              <path d="M9 17.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.25c-.725 0-1.387.2-2.11.537-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978.29 1.05.702 1.885 1.445 2.524.742.64 1.63.925 2.716 1.062 1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132 1.086-.137 1.974-.422 2.716-1.061.743-.64 1.155-1.474 1.445-2.525.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146.03-.87-.062-1.614-.403-2.325C22 6.84 21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415-.724-.338-1.386-.537-2.111-.537zM8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365.609-.284 1.047-.396 1.476-.396.43 0 .867.112 1.476.396.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638.587.443.91.809 1.11 1.225.199.416.282.894.257 1.626-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845-.247.896-.545 1.415-.977 1.787-.433.373-.994.593-1.925.71-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12-.93-.117-1.492-.337-1.925-.71-.432-.372-.73-.891-.977-1.787-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026-.025-.732.058-1.21.258-1.626.2-.416.521-.782 1.11-1.225.603-.454 1.424-.944 2.589-1.638l1.385-.825z"
              ></path>
            </svg>
          </div>

          <p className="text-[#5750f1] font-medium text-[16px]">Dashboard</p>
        </div>

        <div
          className={`text-[#5750f1] transition-transform duration-300 ${
            show ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="currentColor"
            className="ml-auto transition-transform duration-200 rotate-0"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
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
        <div className="flex flex-col justify-end items-end gap-4 mt-2">
          <label className="bg-[#f3f3fd] p-2 border rounded-[5px] border-[#f3f3fd] w-40 text-start text-[#5750f1] font-medium text-[16px]">
            eCommerce
          </label>

          <ul className="flex flex-col w-40 gap-6">
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Analytics</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs text-white">
                Pro
              </p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Marketing</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs text-white">
                Pro
              </p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">CRM</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs text-white">
                Pro
              </p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Stocks</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs text-white">
                Pro
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

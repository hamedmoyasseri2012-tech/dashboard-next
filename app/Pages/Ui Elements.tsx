import { useState } from "react";

const UIElements = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col gap-2 ml-5 mr-6 ">
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
                d="M6.5 1.75a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM3.25 6.5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM17.5 12.75a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm-3.25 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12.75 6.5a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zm4.75-3.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM6.5 12.75a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM3.25 17.5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <p className="text-[#4b5563] font-medium text-[16px]">UI Elements</p>
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
              <p className="text-[#4b5563] font-medium">Accordion</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Alerts</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Badge</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">BreadCrumbs</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Buttons</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Buttons Group</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Cards</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Carousel</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Drop Downs</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Images</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Modals</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Notifications</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Pagination</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Popovers</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Progress</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Tabs</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Tooltips</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">videos</p>
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

export default UIElements;

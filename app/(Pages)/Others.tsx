import { useState } from "react";

const Others = () => {
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
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="size-6 shrink-0"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1.25c-.605 0-1.162.15-1.771.402c-.589.244-1.273.603-2.124 1.05L6.037 3.787c-1.045.548-1.88.987-2.527 1.418c-.668.447-1.184.917-1.559 1.554c-.374.635-.542 1.323-.623 2.142c-.078.795-.078 1.772-.078 3.002v.194c0 1.23 0 2.207.078 3.002c.081.82.25 1.507.623 2.142c.375.637.89 1.107 1.56 1.554c.645.431 1.481.87 2.526 1.418l2.068 1.085c.851.447 1.535.806 2.124 1.05c.61.252 1.166.402 1.771.402s1.162-.15 1.771-.402c.589-.244 1.273-.603 2.124-1.05l2.068-1.084c1.045-.549 1.88-.988 2.526-1.419c.67-.447 1.185-.917 1.56-1.554c.374-.635.542-1.323.623-2.142c.078-.795.078-1.772.078-3.001v-.196c0-1.229 0-2.206-.078-3.001c-.081-.82-.25-1.507-.623-2.142c-.375-.637-.89-1.107-1.56-1.554c-.645-.431-1.481-.87-2.526-1.418l-2.068-1.085c-.851-.447-1.535-.806-2.124-1.05c-.61-.252-1.166-.402-1.771-.402M8.77 4.046c.89-.467 1.514-.793 2.032-1.007c.504-.209.859-.289 1.198-.289c.34 0 .694.08 1.198.289c.518.214 1.141.54 2.031 1.007l2 1.05c1.09.571 1.855.974 2.428 1.356c.282.189.503.364.683.54L12 11.162l-8.34-4.17c.18-.176.401-.351.684-.54c.572-.382 1.337-.785 2.427-1.356zM2.939 8.307c-.05.214-.089.457-.117.74c-.07.714-.071 1.617-.071 2.894v.117c0 1.278 0 2.181.071 2.894c.069.697.2 1.148.423 1.528c.222.377.543.696 1.1 1.068c.572.382 1.337.785 2.427 1.356l2 1.05c.89.467 1.513.793 2.031 1.007q.244.101.448.165v-8.663zm9.812 12.818q.204-.063.448-.164c.518-.214 1.141-.54 2.031-1.007l2-1.05c1.09-.572 1.855-.974 2.428-1.356c.556-.372.877-.691 1.1-1.068c.223-.38.353-.83.422-1.528c.07-.713.071-1.616.071-2.893v-.117c0-1.278 0-2.181-.071-2.894a6 6 0 0 0-.117-.74l-8.312 4.156z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <p className="text-[#4b5563] font-medium text-[16px]">Others</p>
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
              <p className="text-[#4b5563] font-medium">Coming Soon</p>
              <p className="rounded bg-[#5750f1] px-2 py-1 text-xs font-medium text-white">
                Pro
              </p>
            </li>

            <li className="flex justify-between items-center">
              <p className="text-[#4b5563] font-medium">Under Maintance</p>
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

export default Others;

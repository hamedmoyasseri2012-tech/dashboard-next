"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chart3 = () => {
  const series = [65, 20, 10, 5];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },

    labels: ["Desktop", "Mobile", "Tablet", "Unknown"],

    colors: ["#4F46E5", "#7C97F4", "#5B7BEF", "#B9C5F7"],

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    stroke: {
      colors: ["#fff"],
      width: 4,
    },

    plotOptions: {
      pie: {
        expandOnClick: false,

        donut: {
          size: "78%",

          labels: {
            show: false,
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col p-6 ml-4 mt-4 bg-white border border-[#E5E7EB] rounded-2xl w-86">
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-[22px] font-semibold">Used devices</h2>
        <div>
          <select className="px-4 py-2 border border-[#E5E7EB] rounded-xl text-[#6B7280] text-sm">
            <option>Monthly</option>
            <option>yearly</option>
          </select>
        </div>
      </div>
      <div className="relative flex justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={130}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs text-gray-500">Visitors</p>
          <h3 className="text-3xl font-bold text-gray-900">2500</h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 place-items-center gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#4F46E5]"></span>
          <span className="text-[12px]">Desktop: 65%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#5B7BEF]"></span>
          <span className="text-[12px]">Tablet: 10%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#7C97F4]"></span>
          <span className="text-[12px]">Mobile: 20%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#B9C5F7]"></span>
          <span className="text-[12px]">Unknown: 5%</span>
        </div>
      </div>
    </div>
  );
};

export default Chart3;

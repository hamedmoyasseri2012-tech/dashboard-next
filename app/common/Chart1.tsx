"use client";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const Chart1 = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "",
        data: [12, 7, 15, 30, 25, 67, 79, 68, 82, 92, 74, 60],
      },
      {
        name: "",
        data: [0, 18, 35, 43, 34, 52, 64, 49, 63, 74, 59, 73],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },

      colors: ["#16baef", "#556ae9"],
      legend: { show: false },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      title: {
        text: "",
        align: "left",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2025-01-01",
          "2025-02-02",
          "2025-03-03",
          "2025-04-04",
          "2025-05-05",
          "2025-06-06",
          "2025-07-07",
          "2025-08-08",
          "2025-09-09",
          "2025-10-10",
          "2025-11-11",
          "2025-12-12",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val: string) {
            return val;
          },
        },
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col  ml-4 border-[#e5e7eb] bg-white border w-85.75 h-165 rounded-xl">
        <div className="flex flex-col justify-center items-center gap-3 p-4  ">
          <div className="p-4 text-[22px] font-medium flex flex-col gap-3">
            <h1>Payments Overview</h1>
            <div>
              <select
                className="text-[14px]  p-2 border rounded-xl border-[#e8e8e8] text-[#6b7280]"
                name=""
                id=""
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
            </div>
            <div id="chart">
              <ReactApexChart
                options={state.options as ApexOptions}
                series={state.series}
                type="area"
                height={350}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#6b7280] font-medium text-[16px]">
              Received Amount
            </h1>
            <p className="text-[20px] font-medium">$580.00</p>
          </div>
          <div className="border-b w-70 mx-4"></div>
          <div>
            <h1 className="text-[#6b7280] font-medium text-[16px]">
              Due Amount
            </h1>
            <p className="text-[20px] font-medium">$628.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart1;

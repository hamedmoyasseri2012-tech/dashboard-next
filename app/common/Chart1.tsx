"use client";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const Chart1 = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Solar",
        data: [42, 48, 51, 39, 55, 60, 58, 44, 50, 63, 66, 59, 52, 57],
      },
      {
        name: "Wind",
        data: [0, 20, 40, 60, 80, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Renewable Energy Generation",
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
          "2025-06-13",
          "2025-06-14",
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
      <div className="flex flex-col  ml-4 border-[#e5e7eb] bg-white  border w-85.75 h-150 rounded-xl">
        <div className="flex flex-col justify-start items-start gap-3 p-4  ">
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
        </div>
      </div>
    </div>
  );
};

export default Chart1;

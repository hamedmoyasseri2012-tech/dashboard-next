"use client";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const Chart2 = () => {
  const [state] = useState({
    series: [
      {
        name: "Sales",
        data: [43, 55, 40, 66, 21, 42, 64],
      },
      {
        name: "Revenue",
        data: [13, 22, 20, 8, 13, 27, 15],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,

        toolbar: {
          show: false,
        },

        zoom: {
          enabled: false,
        },
      },

      colors: ["#4F46E5", "#1DB5F4"],

      dataLabels: {
        enabled: false,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "24%",
          borderRadius: 10,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },

      grid: {
        borderColor: "#E5E7EB",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },

      xaxis: {
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        labels: {
          style: {
            colors: "#6B7280",
            fontSize: "15px",
          },
        },
      },

      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,

        labels: {
          style: {
            colors: "#6B7280",
            fontSize: "14px",
          },
        },
      },

      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: false,

        fontSize: "16px",

        markers: {
          width: 12,
          height: 12,
          radius: 12,
        },

        itemMargin: {
          horizontal: 12,
        },
      },

      fill: {
        opacity: 1,
      },

      tooltip: {
        enabled: true,
      },
    } as ApexOptions,
  });

  return (
    <div className="flex flex-col p-6 ml-4 mt-4 bg-white border border-[#E5E7EB] rounded-2xl w-86">
      <h1 className="text-[22px] font-semibold text-[#111827]">
        Profit this week
      </h1>

      <div className="mt-5 mb-2">
        <select className="px-4 py-2 border border-[#E5E7EB] rounded-xl text-[#6B7280] text-sm">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart2;

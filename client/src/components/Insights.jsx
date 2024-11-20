import { LuFileBarChart2 } from "react-icons/lu";
import Chart from "react-apexcharts";
import HeatMapI from "../assets/Horizontal container.png";

const generateData = (length, { min, max }) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const Insights = () => {
  const heatmapOptions = {
    chart: {
      height: 100,
      type: "heatmap",
      animations: {
        enabled: true,
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        shadeIntensity: 0,
        radius: 10,
        legend: {
          display: false,
        },
        useFillColorAsStroke: false,
        distributed: true,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: "low",
              color: "#D62728",
            },
            {
              from: 6,
              to: 20,
              name: "medium",
              color: "#FF7F0E",
            },
            {
              from: 21,
              to: 45,
              name: "high",
              color: "#2980B9",
            },
            {
              from: 46,
              to: 55,
              name: "extreme",
              color: "#D1C4E9",
            },
            {
              from: 56,
              to: 65,
              name: "extreme",
              color: "#FFFFFF",
            },
          ],
        },
      },
    },
    title: {
      text: "",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    // xaxis: {
    //   type: "category",
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    // },
    grid: {
      padding: {
        left: 8,
        right: 8,
        top: 8,
        bottom: 8,
      },
      xaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    },
    stroke: {
      width: 7, // Ensure no stroke
      height: 7,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      style: {
        fontSize: "12px",
      },
    },
  };

  // Generating data for heatmap
  const heatmapData = [
    {
      name: "",
      data: generateData(15, { min: -30, max: 55 }),
    },
    {
      name: "",
      data: generateData(15, { min: -30, max: 55 }),
    },
    {
      name: "",
      data: generateData(15, { min: -30, max: 55 }),
    },
    {
      name: "",
      data: generateData(15, { min: -30, max: 55 }),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Yellow Summary Card */}
      <div className="w-full px-4">
        <div className="h-[100px] w-full mt-8 p-6 rounded-md bg-[#FFECCB]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">High Risk Structures</span>
              <h1 className="text-xl ">12.50%</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Expected Improvement</span>
              <h1 className="text-xl ">19.27%</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Cost to Improve</span>
              <h1 className="text-xl">₹240.74 K</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Deviation from Ideal</span>
              <h1 className="text-xl ">7.39%</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Area Cards */}
      {/* // ! use heatmap here
       */}
      <div className="w-full flex justify-between mt-10 px-4">
        {/* Sub Area 1 */}
        <div className="w-full p-4 bg-white rounded-lg mb-4">
          <h3 className="text-lg flex items-center gap-1 mb-2">
            <LuFileBarChart2 size={20} />
            Sub Area 1
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            A comprehensive hyperlocal analysis of high-risk structures and
            their surrounding areas.
          </p>
          <div className="w-full  rounded-lg overflow-hidden">
            <Chart
              options={heatmapOptions}
              series={heatmapData}
              type="heatmap"
              height={200}
            />
          </div>
        </div>
        {/* Sub Area 2 */}
        <div className="w-full  p-4     rounded-lg  mb-4 ">
          <div className="flex">
            <LuFileBarChart2
              size={40}
              className="mr-2 p-1 bg-white rounded-md"
            />
            <div className="">
              <h3 className="text-lg flex items-center  mb-2">Sub Area 2</h3>
              <p className="text-sm text-gray-600 mb-4">
                A comprehensive hyperlocal analysis of high-risk structures and
                their surrounding areas.
              </p>
            </div>
          </div>

          <div className="w-full  rounded-lg overflow-hidden">
            <Chart
              options={heatmapOptions}
              series={heatmapData}
              type="heatmap"
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;

import { LuFileBarChart2 } from "react-icons/lu";
import Box from "@mui/material/Box";
import { Heatmap } from "@mui/x-charts-pro/Heatmap";
import React from "react"; // Ensure React is imported

function CustomCell(props) {
  const { x, y, width, height, ownerState, ...other } = props;
  return (
    <React.Fragment>
      <rect
        {...other}
        x={x + 1} // Increase x offset for horizontal gap
        y={y + 1} // Increase y offset for vertical gap
        width={width - 4} // Decrease width for horizontal gap
        height={height - 16} // Decrease height for vertical gap
        fill={ownerState.color}
        rx={(height - 10) / 2} // Make corners fully rounded
        ry={(height - 10) / 2} // Make corners fully rounded
      />
    </React.Fragment>
  );
}

const Insights = () => {
  const data = [];
  const rows = "ABCDEGHIJKL".split("");
  const columns = 25;

  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < columns; col++) {
      // Create a gradient effect
      const value = Math.sin(col / 8) * 50 + 50 + Math.random() * 20;
      data.push([row, col, value]);
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Yellow Summary Card */}
      <div className="w-full px-4">
        <div className="h-[100px] w-full mt-10 p-8 rounded-md bg-[#FFECCB]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">High Risk Structures</span>
              <h1 className="text-xl font-bold">12.50%</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Expected Improvement</span>
              <h1 className="text-xl font-bold">19.27%</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Cost to Improve</span>
              <h1 className="text-xl font-bold">₹240.74 K</h1>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#777777]">Deviation from Ideal</span>
              <h1 className="text-xl font-bold">7.39%</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Area Cards */}
      <div className="w-full flex justify-between mt-10 px-4">
        {/* Sub Area 1 */}
        <div className="w-[48%] p-4 bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-lg flex items-center gap-1 mb-2">
            <LuFileBarChart2 size={20} />
            Sub Area 1
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            A comprehensive hyperlocal analysis of high-risk structures and
            their surrounding areas.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <Heatmap
                slots={{ cell: CustomCell }}
                xAxis={[
                  {
                    data: Array.from({ length: 26 }, (_, i) => i),
                    tickInterval: 4,
                  },
                ]}
                yAxis={[
                  {
                    data: rows, // Use the rows array for y-axis
                  },
                ]}
                series={[
                  {
                    data,
                    highlightScope: { highlight: "item" },
                    colors: [
                      "#F87171", // red
                      "#FACC15", // yellow
                      "#E9D5FF", // light purple
                      "#A78BFA", // medium purple
                      "#7C3AED", // dark purple
                    ],
                  },
                ]}
                height={200}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              />
            </Box>
          </div>
        </div>

        {/* Sub Area 2 */}
        <div className="w-[48%] p-4 bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-lg flex items-center gap-1 mb-2">
            <LuFileBarChart2 size={20} />
            Sub Area 2
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            A comprehensive hyperlocal analysis of high-risk structures and
            their surrounding areas.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <Heatmap
                slots={{ cell: CustomCell }}
                xAxis={[
                  {
                    data: Array.from({ length: 26 }, (_, i) => i),
                    tickInterval: 4,
                  },
                ]}
                yAxis={[
                  {
                    data: rows, // Use the rows array for y-axis
                  },
                ]}
                series={[
                  {
                    data,
                    highlightScope: { highlight: "item" },
                    colors: [
                      "#F87171", // red
                      "#FACC15", // yellow
                      "#E9D5FF", // light purple
                      "#A78BFA", // medium purple
                      "#7C3AED", // dark purple
                    ],
                  },
                ]}
                height={200}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;

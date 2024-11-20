import ReatTime from "../assets/realTimeAssesment.png";

const ModelTrend = () => {
  return (
    <div className="flex flex-col p-2 text-[#7F56D9]  space-y-8">
      {/* First Row */}
      <div className="flex flex-row  w-full max-w-4xl px-1">
        <div className="flex flex-col  w-full px-4">
          <h3 className="text-md  mb-4 mt-4 font-medium">Real Time Assessment</h3>
          <table className="riskTimeAssessmentTable table-auto">
            <thead>
              <tr>
                <th rowspan="2">Risk Level</th>
                <th rowspan="2">Scope</th>
                <th colspan="2">Flood</th>
              </tr>
              <tr>
                <th>% of structures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="veryLowRisk">Very Low risk</td>
                <td className="text-center">1</td>
                <td className="text-center">0.1</td>
              </tr>
              <tr>
                <td className="lowRisk">Low risk</td>
                <td className="text-center">2</td>
                <td className="text-center">17</td>
              </tr>
              <tr>
                <td className="moderateRisk">Moderate risk</td>
                <td className="text-center">3</td>
                <td className="text-center">38.8</td>
              </tr>
              <tr>
                <td className="highRisk">High risk</td>
                <td className="text-center">4</td>
                <td className="text-center highRisk">44</td>
              </tr>
              <tr>
                <td className="veryHighRisk">Very High risk</td>
                <td className="text-center">5</td>
                <td className="text-center">0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full px-4">
          <h3 className="text-md  mb-4 mt-4 font-medium">Project Assessment (RCP 2.6)</h3>
          <table className="riskTimeAssessmentTable table-auto">
            <thead>
              <tr>
                <th rowspan="2">Risk Level</th>
                <th rowspan="2">Scope</th>
                <th colspan="2">Flood</th>
              </tr>
              <tr>
                <th>% of structures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="veryLowRisk">Very Low risk</td>
                <td className="text-center">1</td>
                <td className="text-center">0.1</td>
              </tr>
              <tr>
                <td className="lowRisk">Low risk</td>
                <td className="text-center">2</td>
                <td className="text-center">17</td>
              </tr>
              <tr>
                <td className="moderateRisk">Moderate risk</td>
                <td className="text-center">3</td>
                <td className="text-center">38.8</td>
              </tr>
              <tr>
                <td className="highRisk">High risk</td>
                <td className="text-center">4</td>
                <td className="text-center highRisk">44</td>
              </tr>
              <tr>
                <td className="veryHighRisk">Very High risk</td>
                <td className="text-center">5</td>
                <td className="text-center">0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row  w-full max-w-4xl px-1">
        <div className="flex flex-col  w-full px-4">
          <h3 className="text-md  mb-4 mt-4 font-medium">Project Assessment (RCP 4.5)</h3>
          <table className="riskTimeAssessmentTable table-auto">
            <thead>
              <tr>
                <th rowspan="2">Risk Level</th>
                <th rowspan="2">Scope</th>
                <th colspan="2">Flood</th>
              </tr>
              <tr>
                <th>% of structures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="veryLowRisk">Very Low risk</td>
                <td className="text-center">1</td>
                <td className="text-center">0.1</td>
              </tr>
              <tr>
                <td className="lowRisk">Low risk</td>
                <td className="text-center">2</td>
                <td className="text-center">17</td>
              </tr>
              <tr>
                <td className="moderateRisk">Moderate risk</td>
                <td className="text-center">3</td>
                <td className="text-center">38.8</td>
              </tr>
              <tr>
                <td className="highRisk">High risk</td>
                <td className="text-center">4</td>
                <td className="text-center highRisk">44</td>
              </tr>
              <tr>
                <td className="veryHighRisk">Very High risk</td>
                <td className="text-center">5</td>
                <td className="text-center">0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col  w-full px-4">
          <h3 className="text-md  mb-4 mt-4 font-medium">Project Assessment (RCP 8.5)</h3>
          <table className="riskTimeAssessmentTable table-auto">
            <thead>
              <tr>
                <th rowspan="2">Risk Level</th>
                <th rowspan="2">Scope</th>
                <th colspan="2">Flood</th>
              </tr>
              <tr>
                <th>% of structures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="veryLowRisk">Very Low risk</td>
                <td className="text-center">1</td>
                <td className="text-center">0.1</td>
              </tr>
              <tr>
                <td className="lowRisk">Low risk</td>
                <td className="text-center">2</td>
                <td className="text-center">17</td>
              </tr>
              <tr>
                <td className="moderateRisk">Moderate risk</td>
                <td className="text-center">3</td>
                <td className="text-center">38.8</td>
              </tr>
              <tr>
                <td className="highRisk">High risk</td>
                <td className="text-center">4</td>
                <td className="text-center highRisk">44</td>
              </tr>
              <tr>
                <td className="veryHighRisk">Very High risk</td>
                <td className="text-center">5</td>
                <td className="text-center">0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModelTrend;

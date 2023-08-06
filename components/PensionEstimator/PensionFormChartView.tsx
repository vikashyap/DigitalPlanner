"use client";
import { LineChartGraph } from "@Components/index";
import { useSavingPlanCalculator } from "../../hooks/useSavingPlanCalculator";
import { useSavingsProgressEstimationInYears } from "../../hooks/useSavingsProgressEstimationInYears";
import { PensionEstimatorGraphPlaceholderView } from "./PensionEstimatorGraphPlaceholderView";
export const PensionFormChartView = () => {
  const projectedData = useSavingPlanCalculator(); // use hook to get valid updated from store and calculate the projected data
  const chartData = useSavingsProgressEstimationInYears(projectedData); // use hook to calculate the chart data

  if (!chartData.length) {
    return <PensionEstimatorGraphPlaceholderView />;
  }
  return (
    <>
      <h2 className="text-xl font-semibold">
        Witness the potential growth of your pension investments.
      </h2>
      <div className="h-full bg-neutral-50 rounded-lg flex-grow p-4  border border-orange-300 p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Progress estimation in years
        </h2>
        <LineChartGraph
          chartData={chartData}
          dataKeyX="year"
          dataKeyY="savings"
        />
      </div>
    </>
  );
};

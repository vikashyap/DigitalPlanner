"use client";
import { LineChartGraph } from "@Components/index";
import { useSavingPlanCalculator } from "../../hooks/useSavingPlanCalculator";
import { useSavingPlanDataCalculation } from "../../hooks/useSavingPlanDataCalculation";
import { usePensionEstimatorStore } from "../../store/PensionEstimatorStore";
import { PensionEstimator } from "../../types";
import { PensionEstimatorGraphPlaceholderView } from "./PensionEstimatorGraphPlaceholderView";
export const PensionFormChartView = () => {
  const data = usePensionEstimatorStore(
    (state) => state.PensionEstimatorChartViewData
  ) satisfies PensionEstimator | null;
  console.log("PensionFormChartView data", data);
  const projectedData = useSavingPlanCalculator();
  console.log("PensionFormChartView projectedData", projectedData);
  const chartData = useSavingPlanDataCalculation(projectedData);
  console.log("PensionFormChartView chartData", chartData);

  if (!chartData.length) return <PensionEstimatorGraphPlaceholderView />;
  return (
    <>
      <h2 className="text-xl font-semibold">
        Witness the potential growth of your pension investments.
      </h2>
      <div className="h-full  bg-neutral-50 rounded-lg flex-grow p-4 bg-neutral-50 rounded-lg h-full border border-orange-300 p-4 ">
        <LineChartGraph
          chartData={chartData}
          dataKeyX="year"
          dataKeyY="savings"
        />
      </div>
    </>
  );
};

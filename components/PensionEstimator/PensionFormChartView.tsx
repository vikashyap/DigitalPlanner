"use client";
import { useEffect, useMemo } from "react";
import { usePensionEstimatorStore } from "../../store/PensionEstimatorStore";
import { PensionEstimator } from "../../types";
import PensionEstimatorChart from "./PensionEstimatorLineChartView";
export const PensionFormChartView = () => {
  const data = usePensionEstimatorStore(
    (state) => state.PensionEstimatorChartViewData
  ) satisfies PensionEstimator | null;

  console.log("PensionFormChartView data", data);
  const currentYear = new Date().getFullYear();
  const projectedData = useMemo(() => {
    // Calculate projected savings data based on user inputs
    if (!data) return null;

    const values = data;
    const {
      initialDeposit,
      monthlyContributions,
      currentAge,
      desiredRetirementAge,
      riskLevel,
    } = values;

    const interestRate = riskLevel; // 2% for conservative, 4% for moderate, 6% for aggressive

    const projectedSavingsData = Array.from({
      length: desiredRetirementAge - currentAge + 1,
    }).reduce((data: { [year: string]: number }, _, yearIndex) => {
      const year = currentAge + yearIndex;
      const yearsUntilRetirement = year - currentAge;
      const compoundInterestFactor = Math.pow(
        1 + interestRate,
        yearsUntilRetirement
      );
      const savingsForYear =
        initialDeposit +
        monthlyContributions *
          12 *
          ((compoundInterestFactor - 1) / interestRate);

      data[(currentYear + yearsUntilRetirement).toString()] =
        Math.round(savingsForYear * 100) / 100; // Round to 2 decimal places

      return data;
    }, {});

    return projectedSavingsData;
  }, [currentYear, data]);

  useEffect(() => {
    // Subscribe to changes in PensionEstimatorChartViewData
    const unsubscribe = usePensionEstimatorStore.subscribe((newData) => {
      console.log("PensionEstimatorChartViewData changed:", newData);
      // Do something with the changed data
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="h-full  bg-neutral-50 rounded-lg flex-grow">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(projectedData, null, 2)}</pre> */}
      <PensionEstimatorChart data={projectedData} />
    </div>
  );
};

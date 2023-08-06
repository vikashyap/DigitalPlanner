import { usePensionEstimatorStore } from "@store/PensionEstimatorStore";
import { useEffect, useMemo } from "react";
import { PensionEstimator } from "../types";

export function useSavingPlanCalculator() {
  const data = usePensionEstimatorStore(
    (state) => state.PensionEstimatorChartViewData
  ) satisfies PensionEstimator | null; // get updated valid  data from the store

  // Subscribe to valid data changes in PensionEstimatorFormView, and update the chart data
  useEffect(() => {
    const unsubscribe = usePensionEstimatorStore.subscribe((newData) => {
      console.log("PensionEstimatorChartViewData changed:", newData);
      // Do something with the changed data, e.g. update the chart  or use any local state
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);
  const currentYear = new Date().getFullYear();

  // Calculate projected savings data based on user inputs
  return useMemo(() => {
    if (!data) {
      return null;
    }

    const values = data;
    const {
      initialDeposit,
      monthlyContributions,
      currentAge,
      desiredRetirementAge,
      riskLevel,
    } = values;

    const interestRate = riskLevel;

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
}

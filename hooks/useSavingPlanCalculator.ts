import { useEffect, useMemo } from "react";
import { usePensionEstimatorStore } from "../store/PensionEstimatorStore";
import { PensionEstimator } from "../types";

export function useSavingPlanCalculator() {
  const data = usePensionEstimatorStore(
    (state) => state.PensionEstimatorChartViewData
  ) satisfies PensionEstimator | null;
  console.log("PensionFormChartView data", data);

  useEffect(() => {
    // Subscribe to changes in PensionEstimatorChartViewData
    const unsubscribe = usePensionEstimatorStore.subscribe((newData) => {
      console.log("PensionEstimatorChartViewData changed:", newData);
      // Do something with the changed data
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);
  const currentYear = new Date().getFullYear();
  return useMemo(() => {
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

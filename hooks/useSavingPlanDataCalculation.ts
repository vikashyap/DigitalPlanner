import { useMemo } from "react";
import { ChartDataItem, YearSavingsData } from "../types";

export const useSavingPlanDataCalculation = (data: YearSavingsData) => {
  const chartData: ChartDataItem[] = useMemo(() => {
    if (!data) return [];
    return Object.entries(data).map(([year, savings]) => ({
      year,
      savings,
    }));
  }, [data]);

  return chartData;
};

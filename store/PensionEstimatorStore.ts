import { create } from "zustand";
import { PensionEstimator } from "../types";

interface PensionEstimatorState {
  PensionEstimatorChartViewData: PensionEstimator | null;
  setPensionEstimatorChartViewData: (data: PensionEstimator | null) => void;
}

export const usePensionEstimatorStore = create<PensionEstimatorState>(
  (set) => ({
    PensionEstimatorChartViewData: null,
    setPensionEstimatorChartViewData: (data: PensionEstimator | null) =>
      set({ PensionEstimatorChartViewData: data }),
  })
);

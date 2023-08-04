import { RiskLevel } from "../types";

interface PensionEstimatorRiskLevelRecordValue {
  label: RiskLevel;
  value: number;
}

export const PENSION_ESTIMATOR_RISKLEVEL_RECORD: Readonly<
  Record<RiskLevel, PensionEstimatorRiskLevelRecordValue>
> = {
  conservative: {
    label: "conservative",
    value: 0.02,
  },
  moderate: {
    label: "moderate",
    value: 0.04,
  },
  aggressive: {
    label: "aggressive",
    value: 0.06,
  },
};

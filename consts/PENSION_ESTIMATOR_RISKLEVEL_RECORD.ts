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
    value: 2,
  },
  moderate: {
    label: "moderate",
    value: 4,
  },
  aggressive: {
    label: "aggressive",
    value: 6,
  },
};

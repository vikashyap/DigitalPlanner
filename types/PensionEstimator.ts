import { Infer, enums, number, type } from "superstruct";

const RiskLevelEnum = enums(["conservative", "moderate", "aggressive"]);
export type RiskLevel = Infer<typeof RiskLevelEnum>;

export const PensionEstimatorStruct = type({
  initialDeposit: number(),
  monthlyContributions: number(),
  desiredRetirementAge: number(),
  currentAge: number(),
  riskLevel: RiskLevelEnum,
});

export type PensionEstimator = Infer<typeof PensionEstimatorStruct>;

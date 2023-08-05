import { Infer, enums, integer, min, number, refine, type } from "superstruct";

const RiskLevelEnum = enums(["conservative", "moderate", "aggressive"]);
export type RiskLevel = Infer<typeof RiskLevelEnum>;

const isGreaterThanCurrentAge = refine(
  number(),
  "isGreaterThanCurrentAge",
  (value: number, context: any) => {
    const currentAge = context.branch[0]?.currentAge;
    return value > currentAge;
  }
);

const isLessThanDesiredRetirementAge = refine(
  number(),
  "isLessThanDesiredRetirementAge",
  (value: number, context: any) => {
    const currentAge = context.branch[0]?.desiredRetirementAge;
    return value < currentAge;
  }
);

export const PensionEstimatorStruct = type({
  initialDeposit: min(integer(), 1),
  monthlyContributions: min(integer(), 1),
  desiredRetirementAge: isGreaterThanCurrentAge,
  currentAge: isLessThanDesiredRetirementAge,
  riskLevel: number(),
});

export type PensionEstimator = Infer<typeof PensionEstimatorStruct>;

export type YearSavingsData = Record<string, number> | null;

export type ChartDataItem = {
  year: string;
  savings: number;
};

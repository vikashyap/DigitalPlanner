"use client";
import {
  ControlledInputField,
  ControlledRangeInputField,
  ControlledSelectField,
} from "@Components/index";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  PensionEstimator,
  PensionEstimatorStruct,
  RiskLevel,
} from "../../types/";
import { PENSION_ESTIMATOR_RISKLEVEL_RECORD } from "./consts/PENSION_ESTIMATOR_RISKLEVEL_RECORD";

import { usePensionEstimatorStore } from "@store/PensionEstimatorStore";
import { assert } from "superstruct";

export const PensionEstimatorFormView: React.FC = () => {
  // Get the setter function from the store
  const setPensionData = usePensionEstimatorStore(
    (state) => state.setPensionEstimatorChartViewData
  );

  const riskLevelOptions = useMemo(
    () =>
      Object.keys(PENSION_ESTIMATOR_RISKLEVEL_RECORD).map((key) => ({
        label: PENSION_ESTIMATOR_RISKLEVEL_RECORD[key as RiskLevel].label,
        value: PENSION_ESTIMATOR_RISKLEVEL_RECORD[key as RiskLevel].value,
      })),
    []
  );

  const {
    control,
    formState: { isLoading, errors, isDirty },
    watch,
    getValues,
  } = useForm<PensionEstimator>({
    mode: "onChange",
    resolver: superstructResolver(PensionEstimatorStruct),
    defaultValues: {
      currentAge: 10,
      desiredRetirementAge: 70,
    },
  });

  const watchTheForm = watch();

  useEffect(() => {
    // only set the data if the form is valid, check for errors
    if (Object.keys(errors).length === 0 && isDirty) {
      try {
        const values = getValues() as PensionEstimator;
        // this will throw an error if the values are invalid;
        assert(values, PensionEstimatorStruct);
        setPensionData(values);
      } catch (e) {
        console.log("Form data validation error:");
      }
    }
  }, [errors, getValues, isDirty, setPensionData, watchTheForm]);

  return (
    <>
      <h4 className="text-xl font-semibold">Calculate Your Pension Savings</h4>
      <div className="bg-neutral-50 rounded-lg h-full  border border-orange-300 p-4">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <ControlledInputField
            required
            fullWidth
            name="initialDeposit"
            type="number"
            label="Initial Deposit"
            control={control}
            disabled={isLoading}
          />

          <ControlledInputField
            required
            fullWidth
            name="monthlyContributions"
            type="number"
            label="Monthly Contributions"
            control={control}
            disabled={isLoading}
          />
          <ControlledSelectField
            name="riskLevel"
            items={riskLevelOptions}
            label="Risk Level"
            control={control}
            type="number"
          />
          <ControlledRangeInputField
            required
            fullWidth
            name="currentAge"
            label="Current Age"
            control={control}
            helperText="Must be less than Desired Retirement Age"
          />
          <ControlledRangeInputField
            required
            fullWidth
            name="desiredRetirementAge"
            label="Desired Retirement Age"
            control={control}
            helperText="Must be greater than Current Age"
          />
        </form>
      </div>
    </>
  );
};

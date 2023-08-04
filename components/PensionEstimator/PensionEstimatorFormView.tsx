"use client";
import { ControlledInputField, ControlledSelectField } from "@Components/index";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { PENSION_ESTIMATOR_RISKLEVEL_RECORD } from "../../consts/PENSION_ESTIMATOR_RISKLEVEL_RECORD"; // TODO: adjust path in tsconfig
import {
  PensionEstimator,
  PensionEstimatorStruct,
  RiskLevel,
} from "../../types/"; // TODO: adjust path in tsconfig

import { assert } from "superstruct";
import { usePensionEstimatorStore } from "../../store/PensionEstimatorStore"; // TODO: adjust path in tsconfig

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
    handleSubmit,
    watch,
    setError,
    setValue,
    getValues,
  } = useForm<PensionEstimator>({
    mode: "onChange",
    resolver: superstructResolver(PensionEstimatorStruct),
    defaultValues: {
      initialDeposit: 0,
      monthlyContributions: 0,
      desiredRetirementAge: 0,
      currentAge: 0,
      riskLevel: 2,
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
    <div className="bg-neutral-50 rounded-lg h-full shadow-lg shadow-orange-100 border border-orange-100">
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
        <ControlledInputField
          required
          fullWidth
          name="currentAge"
          type="number"
          label="Current Age"
          control={control}
          disabled={isLoading}
        />

        <ControlledInputField
          required
          fullWidth
          name="desiredRetirementAge"
          type="number"
          label="Desired Retirement Age"
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
      </form>
    </div>
  );
};

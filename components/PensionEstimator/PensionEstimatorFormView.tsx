"use client";
import { ControlledInputField, ControlledSelectField } from "@Components/index";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { PENSION_ESTIMATOR_RISKLEVEL_RECORD } from "../../consts/PENSION_ESTIMATOR_RISKLEVEL_RECORD";
import {
  PensionEstimator,
  PensionEstimatorStruct,
  RiskLevel,
} from "../../types/";

export const PensionEstimatorFormView: React.FC = () => {
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
    formState: { isLoading },
    handleSubmit,
    setValue,
    watch,
  } = useForm<PensionEstimator>({
    resolver: superstructResolver(PensionEstimatorStruct),
    defaultValues: {
      initialDeposit: 0,
      monthlyContributions: 0,
      desiredRetirementAge: 0,
      currentAge: 0,
      riskLevel: "conservative",
    },
  });

  const onSubmit = (data: PensionEstimator) => {
    console.log(data);
    // Perform any further actions with the form data
  };

  return (
    <div className="bg-neutral-50 rounded-lg h-full shadow-lg shadow-orange-100 border border-orange-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
      >
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
          name="desiredRetirementAge"
          type="number"
          label="Desired Retirement Age"
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
        <ControlledSelectField
          name="riskLevel"
          items={riskLevelOptions}
          label="Risk Level"
          control={control}
        />
      </form>
    </div>
  );
};
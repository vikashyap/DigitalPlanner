"use client";
import { ReactNode, useCallback, useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: ReactNode;
  fullWidth?: boolean;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  helperText?: string;
}

export function ControlledRangeInputField<T extends FieldValues>(
  props: Props<T>
) {
  const { min = 1, max = 100, step = 1, required } = props;
  const [sliderValue, setSliderValue] = useState(
    // Use the default value from the form or a fallback value
    props.control._defaultValues?.[props.name] || min
  );

  const handleSliderDelayedChange = useCallback((value: number, field: any) => {
    setSliderValue(value);
    field.onChange(value);
  }, []);

  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{
        ...(required && { required: "Required" }),
      }}
      render={({ field, fieldState }) => {
        const errorInputClass = !!fieldState.error
          ? "bg-red-50 border border-red-500 text-red-900"
          : "";

        return (
          <div>
            {props.label && (
              <label
                htmlFor={props.name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {props.label}
                {required && <span className="text-red-500">*</span>}
              </label>
            )}
            <input
              {...field}
              type="range"
              id={props.name}
              min={min}
              max={max}
              value={sliderValue}
              onChange={(e) => {
                setSliderValue(Number(e.target.value)); // Manually update slider value to avoid lag
              }}
              onMouseUp={() => {
                handleSliderDelayedChange(sliderValue, field); // Update form value after slider value is updated
              }}
              onKeyUp={() => {
                handleSliderDelayedChange(sliderValue, field); // Update form value after slider value is updated
              }}
              step={step}
              required={required}
              className={`w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 ${errorInputClass}`}
            />
            <div className="flex justify-end">
              <span className="text-sm text-gray-700">{sliderValue}</span>
            </div>
            {fieldState.error && (
              <span className="error  text-xs text-red-900">
                {props.helperText || fieldState.error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}

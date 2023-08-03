"use client";
import { ReactNode } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  type?: "text" | "number" | "password";
  helperText?: string;
  disabled?: boolean;
  autoComplete?: "off";
  onPressEnter?: () => void;
}

export function ControlledInputField<T extends FieldValues>(props: Props<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{
        ...(props.required && { required: "Required" }),
      }}
      render={({ field, fieldState }) => (
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {props.label}
          </label>
          <input
            {...field}
            type={props.type}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={props.placeholder}
            required={props.required}
          />
          {!!fieldState.error?.message && (
            <span className="error">{!!fieldState.error?.message}</span>
          )}
        </div>
      )}
    />
  );
}

"use client";
import { ReactNode } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface SelectOption {
  value: number;
  label: string;
}

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  items: SelectOption[];
  type?: "text" | "number";
}

export function ControlledSelectField<T extends FieldValues>(props: Props<T>) {
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
            htmlFor={props.name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {props.label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
          <select
            {...field}
            id={props.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={props.required}
            disabled={props.disabled}
            {...(props.type === "number" && {
              onChange: (e) =>
                field.onChange(
                  e.target.value === "" ? "" : Number(e.target.value)
                ),
            })}
          >
            <option value="">Choose an option</option>
            {props.items.map((item) => (
              <option key={item.value} value={Number(item.value)}>
                {item.label}
              </option>
            ))}
          </select>
          {!!fieldState.error?.message && (
            <span className="error">{fieldState.error.message}</span>
          )}
        </div>
      )}
    />
  );
}

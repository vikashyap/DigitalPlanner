"use client";
import {
  PensionEstimatorFormView,
  PensionFormChartView,
} from "@Components/index";

//Note: Only using default export for page components
export default function Page() {
  return (
    <>
      <PensionEstimatorFormView />
      <PensionFormChartView />
    </>
  );
}

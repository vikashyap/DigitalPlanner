"use client";
import { useEffect } from "react";
import { usePensionEstimatorStore } from "../../store/PensionEstimatorStore";
export const PensionFormChartView = () => {
  const data = usePensionEstimatorStore(
    (state) => state.PensionEstimatorChartViewData
  );

  console.log("PensionFormChartView data", data);

  useEffect(() => {
    // Subscribe to changes in PensionEstimatorChartViewData
    const unsubscribe = usePensionEstimatorStore.subscribe((newData) => {
      console.log("PensionEstimatorChartViewData changed:", newData);
      // Do something with the changed data
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="h-full  bg-neutral-50 rounded-lg flex-grow">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

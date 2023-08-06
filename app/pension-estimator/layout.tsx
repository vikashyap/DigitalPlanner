"use client";

interface Props {
  children: React.ReactNode;
}

const PensionEstimatorLayout: React.FC<Props> = ({ children }) => {
  console.log("PensionEstimatorLayout rendered"); // To show that this component is not re-rendered on route change
  return (
    <div className="flex flex-col  h-full flex-grow rounded-lg bg-orange-50 mt-4 gap-4 p-4 border-orange-100 border">
      {children}
    </div>
  );
};

export default PensionEstimatorLayout;

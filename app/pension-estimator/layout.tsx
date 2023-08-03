"use client";

interface Props {
  children: React.ReactNode;
}

const PensionEstimatorLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col max-h-full h-full flex-grow rounded-lg bg-orange-50 mt-4 gap-2 p-4 border-orange-200 border">
      {children}
    </div>
  );
};

export default PensionEstimatorLayout;

type PensionEstimatorGraphPlaceholderData = {
  Icon: React.ReactNode;
  h1Text: string;
  paragaphText: string;
};

export const PENSION_ESTIMATOR_GRAPH_PLACEHOLER_DATA: PensionEstimatorGraphPlaceholderData[] =
  [
    {
      Icon: <MdNoiseAware className="w-10 h-10 text-black" />,
      h1Text: "Consistent saving",
      paragaphText:
        "Exploring the power of consistent saving for your retirement reveals the remarkable advantages of maintaining a steady savings routine.",
    },
    {
      Icon: <MdSupervisedUserCircle className="w-10 h-10 text-black" />,
      h1Text: "Modest investments",
      paragaphText:
        "Gain a clear understanding of how your contributions can accumulate over time, revealing the compelling potential of even modestinvestments.",
    },
    {
      Icon: <MdTaskAlt className="w-10 h-10 text-black" />,
      h1Text: "Pension investments",
      paragaphText:
        " Experience the exciting journey of witnessing the potential growth of your pension investments.",
    },
  ];
import {
  MdNoiseAware,
  MdSupervisedUserCircle,
  MdTaskAlt,
} from "react-icons/md";

export const PensionEstimatorGraphPlaceholderView = () => {
  return (
    <div className="w-full flex flex-col  flex-grow justify-center items-center  gap-4  p-4 bg-neutral-50 rounded-lg border border-orange-300">
      <h2 className="text-2xl font-semibold">
        Fill the Form to See Your Savings Journey
      </h2>
      <p className="text-gray-600 mb-4">
        Discover why saving is important with us and visualize your pension
        growth.
      </p>
      <div className="grid md:grid-cols-3 gap-4 flex-grow">
        {PENSION_ESTIMATOR_GRAPH_PLACEHOLER_DATA.map((item, index) => (
          <div
            key={index}
            className="w-full  bg-orange-100 rounded-lg shadow-xl p-4 flex flex-col items-center gap-4"
          >
            {item.Icon}
            <h1 className="text-2xl font-semibold">{item.h1Text}</h1>
            <p className="text-md text-black text-center">
              {item.paragaphText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

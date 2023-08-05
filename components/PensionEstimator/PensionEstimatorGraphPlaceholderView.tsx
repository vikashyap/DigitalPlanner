// type PensionEstimatorGraphPlaceholderData = {
//   Icon: React.ReactNode;
//   paragaph: string;
// };

// export const PENSION_ESTIMATOR_GRAPH_PLACEHOLER_DATA: PensionEstimatorGraphPlaceholderData[] =
//   [
//     {
//       Icon: <ChartMixedIcon />,
//       paragaph:
//         "Exploring the power of consistent saving for your retirement reveals the remarkable advantages of maintaining a steady savings routine.",
//     },
//   ];
import {
  MdNoiseAware,
  MdSupervisedUserCircle,
  MdTaskAlt,
} from "react-icons/md";

export const PensionEstimatorGraphPlaceholderView = () => {
  return (
    <div className="w-full flex flex-col  flex-grow justify-center items-center my-4 gap-4 bg-white p-4 bg-neutral-50 rounded-lg border border-orange-300">
      <h2 className="text-2xl font-semibold">
        Fill the Form to See Your Savings Journey
      </h2>
      <p className="text-gray-600 mb-4">
        Discover why saving is important with us and visualize your pension
        growth.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {/* {PENSION_ESTIMATOR_GRAPH_PLACEHOLER_DATA.map((item, index) => (
          <div
            key={index}
            className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4"
          >
            {item.Icon}

            <p className="text-md text-black text-center">{item.paragaph}</p>
          </div>
        ))} */}
        <div className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4">
          <MdNoiseAware className="w-10 h-10 text-black" />
          <p className="text-md text-black text-center">
            Exploring the power of consistent saving for your retirement reveals
            the remarkable advantages of maintaining a steady savings routine.
          </p>
        </div>
        <div className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4">
          <MdSupervisedUserCircle className="w-10 h-10 text-black" />

          <p className="text-md text-black text-center">
            Gain a clear understanding of how your contributions can accumulate
            over time, revealing the compelling potential of even modest
            investments.
          </p>
        </div>
        <div className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4">
          <MdTaskAlt className="w-10 h-10 text-black" />
          <p className="text-md text-black text-center">
            Experience the exciting journey of witnessing the potential growth
            of your pension investments.
          </p>
        </div>
      </div>
    </div>
  );
};

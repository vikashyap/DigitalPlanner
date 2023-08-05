// import ChartMixedIcon from "./Icons/ChartMixed.svg";

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

export const PensionEstimatorGraphPlaceholderView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-4 gap-4 bg-white p-4">
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
          <svg
            className="w-10 h-10 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 20"
          >
            <path d="M18.972.863a.913.913 0 0 0-.041-.207.956.956 0 0 0-.107-.19 1.01 1.01 0 0 0-.065-.116c-.008-.01-.02-.013-.028-.022a1.008 1.008 0 0 0-.174-.137 1.085 1.085 0 0 0-.141-.095 1.051 1.051 0 0 0-.171-.047.985.985 0 0 0-.207-.041C18.025.007 18.014 0 18 0h-3.207a1 1 0 1 0 0 2h.5l-4.552 3.9-3.5-.874a1 1 0 0 0-.867.189l-5 4a1 1 0 0 0 1.25 1.562L7.238 7.09l3.52.88a1 1 0 0 0 .892-.211L17 3.173v1.034a1 1 0 0 0 2 0V1a.9.9 0 0 0-.028-.137ZM13.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm.24 4.591a3.112 3.112 0 0 1 1.935 1.374 2.036 2.036 0 0 1 .234 1.584 2.255 2.255 0 0 1-1.374 1.469.982.982 0 0 1-1.953.09 2.943 2.943 0 0 1-1.475-.92 1 1 0 0 1 1.536-1.283.953.953 0 0 0 .507.29.778.778 0 0 0 .831-.18 1.108 1.108 0 0 0-.714-.481 3.105 3.105 0 0 1-1.934-1.374 2.042 2.042 0 0 1-.233-1.584 2.264 2.264 0 0 1 1.45-1.493v-.03a1 1 0 0 1 2 0c.517.159.98.457 1.337.862a1.002 1.002 0 1 1-1.524 1.3.962.962 0 0 0-.507-.286.775.775 0 0 0-.829.18 1.113 1.113 0 0 0 .713.482ZM6 20a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
          </svg>

          <p className="text-md text-black text-center">
            Exploring the power of consistent saving for your retirement reveals
            the remarkable advantages of maintaining a steady savings routine.
          </p>
        </div>
        <div className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4">
          <svg
            className="w-10 h-10 text-Black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="text-md text-black text-center">
            Gain a clear understanding of how your contributions can accumulate
            over time, revealing the compelling potential of even modest
            investments.
          </p>
        </div>
        <div className="w-full  bg-amber-200 rounded-lg shadow p-4 flex flex-col items-center gap-4">
          <svg
            className="w-10 h-10 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="20"
            fill="none"
            viewBox="0 0 14 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z"
            />
          </svg>
          <p className="text-md text-black text-center">
            Experience the exciting journey of witnessing the potential growth
            of your pension investments.
          </p>
        </div>
      </div>
    </div>
  );
};

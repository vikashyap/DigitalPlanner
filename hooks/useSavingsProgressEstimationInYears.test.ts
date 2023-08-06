import { renderHook } from "@testing-library/react-hooks";
import { ChartDataItem, YearSavingsData } from "../types";
import { useSavingsProgressEstimationInYears } from "./useSavingsProgressEstimationInYears";

// Mock React's useMemo
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useMemo: (fn: () => ChartDataItem[]) => fn(),
}));

describe("useSavingsProgressEstimationInYears", () => {
  it("returns empty chart data when input data is falsy", () => {
    const { result } = renderHook(() =>
      useSavingsProgressEstimationInYears(null)
    );

    expect(result.current).toEqual([]);
  });

  it("transforms input data into chart data correctly", () => {
    const data: YearSavingsData = {
      "2021": 1000,
      "2022": 1500,
      "2023": 2000,
    };

    const { result } = renderHook(() =>
      useSavingsProgressEstimationInYears(data)
    );

    const expectedChartData: ChartDataItem[] = [
      { year: "2021", savings: 1000 },
      { year: "2022", savings: 1500 },
      { year: "2023", savings: 2000 },
    ];

    expect(result.current).toEqual(expectedChartData);
  });
});

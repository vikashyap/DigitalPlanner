"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props<T> {
  chartData: T[];
  dataKeyX: keyof T;
  dataKeyY: keyof T;
  lineColor?: string;
  graphTitle?: string;
  width?: number;
  height?: number;
}

export const LineChartGraph = <T extends Record<string, unknown>>({
  chartData,
  dataKeyX,
  dataKeyY,
  lineColor = "#8884d8",
  graphTitle = "Years to Retirement",
  width = 600,
  height = 400,
}: Props<T>) => {
  if (!chartData) return null;

  return (
    <ResponsiveContainer width="100%" className="bg-orange-50" height={height}>
      <LineChart width={width} height={height} data={chartData}>
        <XAxis dataKey={dataKeyX as string} />
        <YAxis tick={{ fontSize: 10 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          className="stroke-black-500"
          type="monotone"
          dataKey={dataKeyY as string}
          name={graphTitle}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

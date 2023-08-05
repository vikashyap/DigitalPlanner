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
}

export const LineChartGraph = <T extends Record<string, unknown>>({
  chartData,
  dataKeyX,
  dataKeyY,
  lineColor = "#8884d8",
  graphTitle = "Years to Retirement",
}: Props<T>) => {
  if (!chartData) return null;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey={dataKeyX as string} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={dataKeyY as string}
          name={graphTitle}
          stroke={lineColor}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

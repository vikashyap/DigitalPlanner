import { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PensionEstimatorChartProps {
  data: any;
}

const PensionEstimatorChart: FC<PensionEstimatorChartProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([year, savings]) => ({
    year,
    savings,
  }));

  return (
    <LineChart width={600} height={300} data={chartData}>
      <XAxis dataKey="year" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="savings"
        name="Projected Savings"
        stroke="#8884d8"
      />
    </LineChart>
  );
};

export default PensionEstimatorChart;

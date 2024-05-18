import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Feb",
    total: 50,
  },
  {
    name: "Mar",
    total: 100,
  },
  {
    name: "Apr",
    total: 150,
  },
  {
    name: "May",
    total: 200,
  },
  {
    name: "Jun",
    total: 250,
  },
  {
    name: "Jul",
    total: 300,
  },
];

export default function ChartTotalUser() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#000000"
          fontSize={12}
          tickLine
          axisLine
        />
        <YAxis
          stroke="#000000"
          fontSize={12}
          tickLine
          axisLine
          tickFormatter={(value) => value}
        />
        <Tooltip />
        <Line dataKey="total" stroke="#E1B83B" />
      </LineChart>
    </ResponsiveContainer>
  );
}

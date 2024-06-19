import { PelatihProps, UserProfileProps, UserProps } from "@/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type DataProps = {
  pelatihTari: PelatihProps[];
  users: (UserProfileProps & Pick<UserProps, "name" | "is_already_paid">)[];
};

export default function ChartTotalUser({ data }: { data: DataProps }) {
  const customer = data.users.filter((item) => item.is_already_paid);

  const chartData = [
    {
      name: "Pengguna",
      total: data.users.length,
    },
    {
      name: "Instruktur",
      total: data.pelatihTari.length,
    },
    {
      name: "Customer",
      total: customer.length,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#761217"
          fontSize={12}
          tickLine
          axisLine
        />
        <YAxis
          stroke="#761217"
          fontSize={12}
          tickLine
          axisLine
          tickFormatter={(value) => value}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#761217" />
      </BarChart>
    </ResponsiveContainer>
  );
}

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

export default function ChartTotalUser() {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
  );

  const data = [
    { activity: "Grocery", today: 326800 },
    { activity: "Transportation", today: 15000 },
    { activity: "Housing", today: 185750 },
    { activity: "Food and Drink", monday: 156000 },
    { activity: "Entertainment", monday: 35200 },
  ];

  return (
    <Chart
      type="bar"
      data={{
        labels: data.map((item) => item.activity),
        datasets: [
          {
            label: "Today",
            data: data.map((item) => item.today),
            backgroundColor: "#793FDF",
          },
          {
            label: "Monday",
            data: data.map((item) => item.monday),
            backgroundColor: "#FFFD8C",
          },
        ],
      }}
    />
  );
}

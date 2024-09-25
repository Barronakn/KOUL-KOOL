import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Small', value: 14 },
  { name: 'Medium', value: 16 },
  { name: 'Large', value: 70 },
];

const COLORS = ['#E0471B', '#FF9765', '#FFDCCB'];

export default function PieChartComponent() {
  return (
    <PieChart width={250} height={160}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

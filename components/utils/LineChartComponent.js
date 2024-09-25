import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', current: 0, previous: 250 },
  { name: 'Feb', current: 200, previous: 400 },
  { name: 'Mar', current: 300, previous: 500 },
  { name: 'Apr', current: 600, previous: 300 },
  { name: 'May', current: 500, previous: 600 },
  { name: 'Jun', current: 900, previous: 800 },
  { name: 'Jul', current: 850, previous: 600 },
  { name: 'Aug', current: 800, previous: 800 },
  { name: 'Sep', current: 1100, previous: 1250 },
];

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width={400} height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Line type="monotone" dataKey="current" stroke="#FF7300" strokeWidth={2} />

        <Line type="monotone" dataKey="previous" stroke="#000000" strokeDasharray="5 5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}


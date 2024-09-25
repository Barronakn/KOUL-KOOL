import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Small', value: 14 },
  { name: 'Medium', value: 16 },
  { name: 'Large', value: 70 },
];

const COLORS = ['#E0471B', '#FF9765', '#FFDCCB'];

export default function CircularGraph() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PieChart width={150} height={150}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={63}
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

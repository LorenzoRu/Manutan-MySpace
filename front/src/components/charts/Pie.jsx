
import React from "react";
import { PieChart, Pie, Cell, Label,  } from "recharts";

const data = [
    {name: 'Logistique', value: 158.5},
    {name: 'Achats', value: 158.5},
    {name: 'Chantier', value: 190},
    {name: 'Communication', value: 63.4},
    {name: 'Marketing', value: 158.5},
    {name: 'Autre', value: 38.4},
];
const COLORS = ["#2BB3FF", "#00C192", "#FF8C43", "#F67CF2", "#FDC23C", "#E0E0E0"];

export default function App() {
  return (
    <PieChart width={165} height={165}>
      <Pie
        data={data}
        cx={80}
        cy={80}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        <Label value="634 tCO2" position='center' style={{fontSize: 21, fontWeight: 700}} />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "jan",
    Budget: 1.5,
    Dépenses: 1.5,
  },
  {
    name: "fev",
    Budget: 4,
    Dépenses: 3.5,
  }
  
];

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Dépenses"
        stroke="#8884d8"
      />
      <Line type="monotone" dataKey="Budget" stroke="#82ca9d" />
    </LineChart>
  );
}
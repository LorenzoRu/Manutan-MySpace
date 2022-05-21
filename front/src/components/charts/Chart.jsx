import React from "react";
import {
  AreaChart,
  Area,
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
  },
  {
    name: "mar",
    Budget: 3,
    Dépenses: 3.9,
  },
  {
    name: "avr",
    Budget: 6,
    Dépenses: 5.2,
  },
  {
    name: "mai",
    Budget: 1.9,
    Dépenses: 1.7,
  },
  {
    name: "jui",
    Budget: 8,
    Dépenses: 6.2,
  },
  {
    name: "juil",
    Budget: 3.8,
    Dépenses: 4.2,
  },
  {
    name: "aou",
    Budget: 4,
    Dépenses: 3.5,
  },
  {
    name: "sep",
    Budget: 2,
    Dépenses: 2.3,
  },
  {
    name: "oct",
    Budget: 4.2,
    Dépenses: 3.5,
  },
  {
    name: "nov",
    Budget: 5.2,
    Dépenses: 2.5,
  },
  {
    name: "dec",
    Budget: 6,
    Dépenses: 4.2,
  }


];

export default function App() {
  return (
    <AreaChart
      width={600}
      height={180}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <defs>
        <linearGradient id="colorBu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FF215E" stopOpacity={1} />
          <stop offset="95%" stopColor="#C7FFF8" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id="colorDE" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#304E9A" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#C7FFF8" stopOpacity={0.5} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone"
        dataKey="Budget"
        stroke="#FF215E"
        fillOpacity={0.8}
        fill="url(#colorBu)" />
      <Area
        type="monotone"
        dataKey="Dépenses"
        stroke="#0552AB"
        fillOpacity={1}
        fill="url(#colorDE)"

      />

    </AreaChart>
  );
}
import React from 'react'
import { useSelector } from "react-redux"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { RootState } from "../store"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export const CategoryPieChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.chart.pieChartData)

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-semibold mb-4">Category Distribution</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

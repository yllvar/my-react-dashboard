import React from 'react'
import { useSelector } from "react-redux"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { RootState } from "../store"

export const SalesBarChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.chart.barChartData)

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-semibold mb-4">Quarterly Sales Comparison</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" fill="#8884d8" />
          <Bar dataKey="offline" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

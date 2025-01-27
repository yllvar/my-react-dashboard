import React from 'react'
import { useSelector } from "react-redux"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { RootState } from "../store"

export const SalesLineChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.chart.lineChartData)

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          <Line type="monotone" dataKey="profit" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

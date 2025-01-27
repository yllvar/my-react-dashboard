import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ChartData {
  month: string
  sales: number
  revenue: number
  profit: number
}

interface PieData {
  name: string
  value: number
}

interface BarData {
  category: string
  online: number
  offline: number
}

interface ChartState {
  lineChartData: ChartData[]
  pieChartData: PieData[]
  barChartData: BarData[]
}

const initialState: ChartState = {
  lineChartData: [
    { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
    { month: "Feb", sales: 3000, revenue: 1398, profit: 1000 },
    { month: "Mar", sales: 2000, revenue: 9800, profit: 2300 },
    { month: "Apr", sales: 2780, revenue: 3908, profit: 2000 },
    { month: "May", sales: 1890, revenue: 4800, profit: 1500 },
    { month: "Jun", sales: 2390, revenue: 3800, profit: 1200 },
  ],
  pieChartData: [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Food", value: 300 },
    { name: "Books", value: 200 },
  ],
  barChartData: [
    { category: "Q1", online: 4000, offline: 2400 },
    { category: "Q2", online: 3000, offline: 1398 },
    { category: "Q3", online: 2000, offline: 9800 },
    { category: "Q4", online: 2780, offline: 3908 },
  ],
}

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateLineChartData: (state, action: PayloadAction<ChartData[]>) => {
      state.lineChartData = action.payload
    },
    updatePieChartData: (state, action: PayloadAction<PieData[]>) => {
      state.pieChartData = action.payload
    },
    updateBarChartData: (state, action: PayloadAction<BarData[]>) => {
      state.barChartData = action.payload
    },
  },
})

export const { updateLineChartData, updatePieChartData, updateBarChartData } = chartSlice.actions
export default chartSlice.reducer


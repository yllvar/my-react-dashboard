import { configureStore } from "@reduxjs/toolkit"
import chartReducer from "./chartSlice"
import tableReducer from "./tableSlice"

export const store = configureStore({
  reducer: {
    chart: chartReducer,
    table: tableReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


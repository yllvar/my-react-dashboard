import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

interface Order {
  id: number
  customer: string
  date: string
  total: number
  status: string
}

interface TableState {
  users: User[]
  products: Product[]
  orders: Order[]
}

const initialState: TableState = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Pending" },
  ],
  products: [
    { id: 1, name: "Laptop Pro", category: "Electronics", price: 1299.99, stock: 50 },
    { id: 2, name: "Wireless Mouse", category: "Accessories", price: 29.99, stock: 100 },
    { id: 3, name: "HD Monitor", category: "Electronics", price: 399.99, stock: 30 },
    { id: 4, name: "Mechanical Keyboard", category: "Accessories", price: 159.99, stock: 45 },
    { id: 5, name: "USB-C Hub", category: "Accessories", price: 49.99, stock: 75 },
  ],
  orders: [
    { id: 1, customer: "John Doe", date: "2024-01-15", total: 1329.98, status: "Delivered" },
    { id: 2, customer: "Jane Smith", date: "2024-01-16", total: 559.98, status: "Processing" },
    { id: 3, customer: "Bob Johnson", date: "2024-01-17", total: 209.97, status: "Shipped" },
    { id: 4, customer: "Alice Brown", date: "2024-01-18", total: 1699.97, status: "Pending" },
    { id: 5, customer: "Charlie Wilson", date: "2024-01-19", total: 79.98, status: "Processing" },
  ],
}

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    updateProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    updateOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload)
    },
  },
})

export const { updateUsers, updateProducts, updateOrders, addUser, addProduct, addOrder } = tableSlice.actions
export default tableSlice.reducer


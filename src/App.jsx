import React from 'react';

import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable, ProductsTable } from "./components/usersTable.tsx";


// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Sample Dashboard with resize & reposition </h1>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SalesLineChart />
        <CategoryPieChart />
        <SalesBarChart />
      </div>
      
      {/* Tables Section */}
      <div className="grid grid-cols-1 gap-8">
        <UsersTable />
        <ProductsTable />
      </div>
    </div>
  );
}
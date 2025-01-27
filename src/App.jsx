import React, { useState, useCallback, useMemo } from "react"
import { Responsive, WidthProvider } from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

import { SalesLineChart } from "./components/salesLineChart"
import { SalesBarChart } from "./components/salesBarChart"
import { CategoryPieChart } from "./components/categoryPieChart"
import { UsersTable, ProductsTable } from "./components/usersTable"

const ResponsiveGridLayout = WidthProvider(Responsive)

const initialLayouts = {
  lg: [
    { i: "salesLine", x: 0, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "categoryPie", x: 6, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "salesBar", x: 0, y: 4, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "usersTable", x: 6, y: 4, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "productsTable", x: 0, y: 8, w: 12, h: 4, minW: 6, minH: 3 },
  ],
  md: [
    { i: "salesLine", x: 0, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "categoryPie", x: 6, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "salesBar", x: 0, y: 4, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "usersTable", x: 6, y: 4, w: 6, h: 4, minW: 4, minH: 3 },
    { i: "productsTable", x: 0, y: 8, w: 12, h: 4, minW: 6, minH: 3 },
  ],
  sm: [
    { i: "salesLine", x: 0, y: 0, w: 6, h: 4, minW: 3, minH: 3 },
    { i: "categoryPie", x: 0, y: 4, w: 6, h: 4, minW: 3, minH: 3 },
    { i: "salesBar", x: 0, y: 8, w: 6, h: 4, minW: 3, minH: 3 },
    { i: "usersTable", x: 0, y: 12, w: 6, h: 4, minW: 3, minH: 3 },
    { i: "productsTable", x: 0, y: 16, w: 6, h: 4, minW: 3, minH: 3 },
  ],
}

const widgets = {
  salesLine: <SalesLineChart />,
  categoryPie: <CategoryPieChart />,
  salesBar: <SalesBarChart />,
  usersTable: <UsersTable />,
  productsTable: <ProductsTable />,
}

export default function App() {
  const [layouts, setLayouts] = useState(initialLayouts)

  const onLayoutChange = useCallback((_, allLayouts) => {
    setLayouts(allLayouts)
  }, [])

  const renderWidget = useCallback((key) => {
    return (
      <div key={key} className="widget bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="widget-handle p-2 bg-gray-100 border-b border-gray-200 cursor-move">
          {key.charAt(0).toUpperCase() +
            key
              .slice(1)
              .replace(/([A-Z])/g, " $1")
              .trim()}
        </div>
        <div className="widget-content flex-grow overflow-auto p-4">{widgets[key]}</div>
      </div>
    )
  }, [])

  const gridItems = useMemo(() => {
    return Object.keys(initialLayouts.lg).map((key) => renderWidget(initialLayouts.lg[key].i))
  }, [renderWidget])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Interactive Dashboard</h1>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        margin={[16, 16]}
        containerPadding={[16, 16]}
        useCSSTransforms={true}
        draggableHandle=".widget-handle"
        resizeHandles={["se"]}
      >
        {gridItems}
      </ResponsiveGridLayout>
    </div>
  )
}


# react-assessment

## Node version 20.x

## Instructions
Please clone this repo and do the following assessment:

Create a resize and reposition using appropriate libs to the below charts and tables with the following mock data from Redux.
- tables
- line charts
- pie charts
- bar charts

_____
# React Assessment - Project Documentation

## Project Overview
This documentation covers the modifications and enhancements made to the original react-assessment project, implementing a responsive dashboard with resizable and repositionable components using Redux for state management.

## Known Issues and Solutions

1. Chart resize performance

1.1. Implemented debouncing

1.2. Added size change detection


2. Mobile layout optimization

2.1. Added specific breakpoints

2.2. Modified minimum widget sizes

## Usage Instructions

### Widget Interaction

1. **Repositioning**

1. Drag widgets using the header bar
2. Widgets automatically snap to grid
3. Layout saves automatically


2. **Resizing**

1. Use the bottom-right corner handle
2. Maintains minimum sizes
3. Responsive content scaling


### Data Management

- All data is managed through Redux
- Real-time updates reflect immediately
- Persistent state management
- Type-safe data handling

## Major Changes and Implementations

### 1. Dashboard Layout Implementation
- Implemented responsive grid layout using `react-grid-layout`
- Added drag-and-drop functionality for widget repositioning
- Implemented widget resizing with maintained aspect ratios
- Created a responsive layout system for different screen sizes (lg, md, sm)

### 2. Data Visualization Components
#### Charts Implementation
1. **Line Chart (Monthly Performance)**
   - Implemented using Recharts
   - Displays sales, revenue, and profit metrics
   - Responsive design with automatic resizing
   - Real-time data updates from Redux store

2. **Pie Chart (Category Distribution)**
   - Shows product category distribution
   - Interactive tooltips and legends
   - Custom color scheme implementation
   - Percentage calculations and display

3. **Bar Chart (Quarterly Sales)**
   - Comparison between online and offline sales
   - Responsive axes and grid
   - Interactive data display
   - Custom styling and animations

#### Tables Implementation
1. **Users Table**
   - Sortable columns
   - Status indicators with color coding
   - Responsive design with horizontal scrolling
   - Efficient data rendering

2. **Products Table**
   - Product inventory display
   - Price formatting
   - Stock level indicators
   - Category organization

### 3. State Management
- Implemented Redux store with separate slices:
  - `chartSlice`: Manages all chart data
  - `tableSlice`: Handles table data
- Added actions for data updates
- Implemented selectors for efficient data access

### 4. Styling and UI Improvements
- Implemented responsive design patterns
- Added widget headers with drag handles
- Improved resize handles visibility and usability
- Implemented consistent spacing and typography
- Enhanced visual hierarchy with proper padding and margins

### 5. Performance Optimizations
- Implemented React.memo for performance
- Added useMemo and useCallback hooks
- Optimized Redux selectors
- Improved component rendering efficiency

#### Dependencies Added
```json
{
  "@reduxjs/toolkit": "^2.1.0",
  "react-redux": "^8.0.2",
  "recharts": "^2.15.0",
  "react-grid-layout": "^1.3.4",
  "react-resizable": "^3.0.4"
}




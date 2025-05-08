
import React, { ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { 
  ChartContainer, 
  ChartTooltipContent, 
  ChartLegendContent 
} from "@/components/ui/chart";

interface ChartProps {
  title?: string;
  type: "line" | "area" | "bar" | "pie";
  data: any[];
  width?: string;
  height?: string;
  xAxisKey?: string;
  yAxisKey?: string;
  dataKeys: string[];
  colors?: string[];
}

export const ChartTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-lg font-medium mb-4">{children}</h3>
  );
};

export const Chart: React.FC<ChartProps> = ({
  title,
  type,
  data,
  width = "100%",
  height = "300px",
  xAxisKey = "name",
  yAxisKey = "value",
  dataKeys,
  colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]
}) => {
  // Create a configuration object for the chart
  const chartConfig: any = {};
  dataKeys.forEach((key, index) => {
    chartConfig[key] = {
      label: key,
      theme: {
        light: colors[index % colors.length],
        dark: colors[index % colors.length]
      }
    };
  });

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key, index) => (
              <Line 
                key={key} 
                type="monotone" 
                dataKey={key} 
                stroke={colors[index % colors.length]} 
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        );
      case "area":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key, index) => (
              <Area 
                key={key} 
                type="monotone" 
                dataKey={key} 
                fill={colors[index % colors.length]} 
                stroke={colors[index % colors.length]} 
              />
            ))}
          </AreaChart>
        );
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key, index) => (
              <Bar 
                key={key} 
                dataKey={key} 
                fill={colors[index % colors.length]} 
              />
            ))}
          </BarChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie 
              data={data} 
              dataKey={yAxisKey} 
              nameKey={xAxisKey} 
              cx="50%" 
              cy="50%" 
              outerRadius={80} 
              fill="#8884d8"
              label
            >
              {/* Pie chart doesn't need to map dataKeys the same way */}
            </Pie>
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
          </PieChart>
        );
      default:
        return null;
    }
  };

  // Fix: Wrap the chart in a Fragment to ensure a single child element is passed
  return (
    <div className="chart-container">
      {title && <ChartTitle>{title}</ChartTitle>}
      <div style={{ width, height }}>
        <ChartContainer config={chartConfig}>
          {renderChart()}
        </ChartContainer>
      </div>
    </div>
  );
};

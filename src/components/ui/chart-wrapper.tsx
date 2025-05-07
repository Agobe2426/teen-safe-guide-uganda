
import React, { ReactNode } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import {
  ChartTooltipContent,
  ChartLegendContent,
  ChartContainer,
} from "@/components/ui/chart";

interface ChartDataset {
  label: string;
  data: string;
  backgroundColor?: string;
  borderColor?: string;
}

interface ChartProps {
  type: "line" | "bar" | "pie";
  data: any[];
  indexAxis: string;
  datasets: ChartDataset[];
  options?: any;
  children?: ReactNode;
}

interface ChartTitleProps {
  text: string;
  className?: string;
}

export const Chart = ({ type, data, indexAxis, datasets, options, children }: ChartProps) => {
  // Configure chart based on type
  const config = {
    dataKey: indexAxis,
    // Extract colors for configurability
    colors: datasets.map((ds) => ({
      backgroundColor: ds.backgroundColor || "#8b5cf6",
      borderColor: ds.borderColor || ds.backgroundColor || "#8b5cf6",
    })),
  };

  // Common chart container props
  const containerProps = {
    width: "100%",
    height: "100%",
    config: Object.fromEntries(
      datasets.map((ds, i) => [
        ds.label,
        {
          label: ds.label,
          theme: {
            light: config.colors[i].backgroundColor,
            dark: config.colors[i].borderColor,
          },
        }
      ])
    ),
  };

  return (
    <ChartContainer {...containerProps}>
      {type === "line" && (
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={config.dataKey} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            {datasets.map((dataset, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={dataset.data}
                stroke={config.colors[index].borderColor}
                name={dataset.label}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}

      {type === "bar" && (
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={config.dataKey} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            {datasets.map((dataset, index) => (
              <Bar
                key={index}
                dataKey={dataset.data}
                fill={config.colors[index].backgroundColor}
                name={dataset.label}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}

      {type === "pie" && (
        <ResponsiveContainer>
          <PieChart>
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              nameKey={config.dataKey}
              dataKey={datasets[0].data}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={config.colors[0].backgroundColor} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
      {children}
    </ChartContainer>
  );
};

export const ChartTitle: React.FC<ChartTitleProps> = ({ text, className }) => {
  return (
    <div className={`text-center font-medium mt-2 mb-4 text-muted-foreground ${className || ""}`}>
      {text}
    </div>
  );
};


import React from "react";
import {
  Bar,
  Line,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface ChartTitleProps {
  text: string;
}

export const ChartTitle: React.FC<ChartTitleProps> = ({ text }) => {
  return <h4 className="text-center text-sm font-medium mt-2">{text}</h4>;
};

interface Dataset {
  label: string;
  data: string;
  borderColor?: string;
  backgroundColor?: string;
}

interface ChartProps {
  type: "line" | "bar" | "pie";
  data: any[];
  indexAxis: string;
  datasets: Dataset[];
  options?: any;
  children?: React.ReactNode;
}

export const Chart: React.FC<ChartProps> = ({
  type,
  data,
  indexAxis,
  datasets,
  options,
  children,
}) => {
  const config = datasets.reduce((acc, dataset, index) => {
    acc[dataset.label] = {
      label: dataset.label,
      theme: {
        light: dataset.backgroundColor || dataset.borderColor || "#8b5cf6",
        dark: dataset.backgroundColor || dataset.borderColor || "#8b5cf6",
      },
    };
    return acc;
  }, {} as Record<string, { label: string; theme: { light: string; dark: string } }>);

  const renderChart = () => {
    if (type === "line") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <Line
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={indexAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {datasets.map((dataset, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={dataset.data}
                stroke={dataset.borderColor || "#8b5cf6"}
                name={dataset.label}
                activeDot={{ r: 8 }}
              />
            ))}
          </Line>
        </ResponsiveContainer>
      );
    } else if (type === "bar") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <Bar
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={indexAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {datasets.map((dataset, index) => (
              <Bar
                key={index}
                dataKey={dataset.data}
                fill={dataset.backgroundColor || "#8b5cf6"}
                name={dataset.label}
              />
            ))}
          </Bar>
        </ResponsiveContainer>
      );
    } else if (type === "pie") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <Pie
            data={data}
            dataKey={datasets[0].data}
            nameKey={indexAxis}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {datasets[0].backgroundColor &&
              Array.isArray(datasets[0].backgroundColor) &&
              data.map((entry, index) => (
                <React.Fragment key={`cell-${index}`}>
                  {datasets[0].backgroundColor && Array.isArray(datasets[0].backgroundColor) && (
                    <Cell
                      key={`cell-${index}`}
                      fill={datasets[0].backgroundColor[index]}
                    />
                  )}
                </React.Fragment>
              ))}
          </Pie>
        </ResponsiveContainer>
      );
    }

    return null;
  };

  return (
    <div className="h-full w-full">
      <ChartContainer id={`chart-${type}`} config={config} className="h-full">
        {renderChart()}
      </ChartContainer>
      {children}
    </div>
  );
};


import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LineChart, BarChart, Calendar, BookOpen, User, Filter } from "lucide-react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AgeGroup } from "@/components/AgeSelector";
import {
  Chart,
  ChartLegend,
  ChartTooltip,
  ChartTitle
} from "@/components/ui/chart";
import { initializeUserLearningData } from "@/utils/aiHelper";
import { themeData } from "@/data/content";

const AdminInsights = () => {
  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("week");
  const [ageFilter, setAgeFilter] = useState<AgeGroup | "all">("all");
  const [activeTab, setActiveTab] = useState("usage");
  
  // Get learning data for analytics
  const learningData = initializeUserLearningData();
  
  // Sample analytics data (in a real app this would come from backend)
  const usageData = [
    { name: "Monday", users: 120, sessions: 150 },
    { name: "Tuesday", users: 132, sessions: 165 },
    { name: "Wednesday", users: 101, sessions: 125 },
    { name: "Thursday", users: 134, sessions: 178 },
    { name: "Friday", users: 90, sessions: 120 },
    { name: "Saturday", users: 230, sessions: 340 },
    { name: "Sunday", users: 210, sessions: 290 },
  ];
  
  // Get topic completion data based on available themes
  const topicCompletionData = themeData
    .filter(theme => theme.id !== "culture")
    .map(theme => ({
      name: theme.title,
      completed: Math.floor(Math.random() * 100), // Would be real data in production
      avgDuration: Math.floor(Math.random() * 10) + 5,
    }));
  
  // Age distribution data
  const ageDistributionData = [
    { name: "3-5", users: 75 },
    { name: "6-9", users: 120 },
    { name: "10-12", users: 210 },
    { name: "13-16", users: 180 },
    { name: "17-18", users: 95 },
  ];
  
  // Quiz performance data
  const quizPerformanceData = [
    { name: "Health Basics", avgScore: 92 },
    { name: "Relationship Skills", avgScore: 78 },
    { name: "Body Development", avgScore: 85 },
    { name: "Safety Rules", avgScore: 95 },
    { name: "Values and Ethics", avgScore: 82 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="teen-shield-container">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Admin Insights</h1>
                <p className="text-muted-foreground">
                  Content performance and user analytics
                </p>
              </div>
              
              <div className="flex gap-2">
                <div>
                  <Label htmlFor="timeframe" className="sr-only">Timeframe</Label>
                  <Select value={timeframe} onValueChange={(value: "week" | "month" | "year") => setTimeframe(value)}>
                    <SelectTrigger id="timeframe" className="w-[140px]">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="ageGroup" className="sr-only">Age Group</Label>
                  <Select value={ageFilter} onValueChange={(value: AgeGroup | "all") => setAgeFilter(value)}>
                    <SelectTrigger id="ageGroup" className="w-[140px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Age Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ages</SelectItem>
                      <SelectItem value="3-5">Ages 3-5</SelectItem>
                      <SelectItem value="6-9">Ages 6-9</SelectItem>
                      <SelectItem value="10-12">Ages 10-12</SelectItem>
                      <SelectItem value="13-16">Ages 13-16</SelectItem>
                      <SelectItem value="17-18">Ages 17-18</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="usage" className="text-xs sm:text-sm">
                <LineChart className="h-4 w-4 mr-1 hidden sm:inline" />
                Usage
              </TabsTrigger>
              <TabsTrigger value="content" className="text-xs sm:text-sm">
                <BookOpen className="h-4 w-4 mr-1 hidden sm:inline" />
                Content
              </TabsTrigger>
              <TabsTrigger value="demographics" className="text-xs sm:text-sm">
                <User className="h-4 w-4 mr-1 hidden sm:inline" />
                Demographics
              </TabsTrigger>
              <TabsTrigger value="performance" className="text-xs sm:text-sm">
                <BarChart className="h-4 w-4 mr-1 hidden sm:inline" />
                Performance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="usage">
              <Card className="teen-shield-card p-4">
                <h3 className="font-bold mb-4">App Usage Over Time</h3>
                <div className="h-80 w-full">
                  <Chart
                    type="line"
                    data={usageData}
                    indexAxis="name"
                    datasets={[
                      {
                        label: "Unique Users",
                        data: "users",
                        borderColor: "#8b5cf6",
                        backgroundColor: "transparent",
                      },
                      {
                        label: "Sessions",
                        data: "sessions",
                        borderColor: "#3b82f6",
                        backgroundColor: "transparent",
                      },
                    ]}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  >
                    <ChartTooltip />
                    <ChartLegend />
                    <ChartTitle text="Daily Active Users and Sessions" />
                  </Chart>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="content">
              <Card className="teen-shield-card p-4">
                <h3 className="font-bold mb-4">Topic Completion Analysis</h3>
                <div className="h-80 w-full">
                  <Chart
                    type="bar"
                    data={topicCompletionData}
                    indexAxis="name"
                    datasets={[
                      {
                        label: "Completion Rate (%)",
                        data: "completed",
                        backgroundColor: "#8b5cf6",
                      },
                      {
                        label: "Avg Time (min)",
                        data: "avgDuration",
                        backgroundColor: "#3b82f6",
                      },
                    ]}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  >
                    <ChartTooltip />
                    <ChartLegend />
                    <ChartTitle text="Content Engagement by Theme" />
                  </Chart>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="demographics">
              <Card className="teen-shield-card p-4">
                <h3 className="font-bold mb-4">User Age Distribution</h3>
                <div className="h-80 w-full">
                  <Chart
                    type="pie"
                    data={ageDistributionData}
                    indexAxis="name"
                    datasets={[
                      {
                        data: "users",
                        backgroundColor: [
                          "#c4b5fd",
                          "#a78bfa",
                          "#8b5cf6",
                          "#7c3aed",
                          "#6d28d9",
                        ],
                      },
                    ]}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  >
                    <ChartTooltip />
                    <ChartLegend />
                    <ChartTitle text="Users by Age Group" />
                  </Chart>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance">
              <Card className="teen-shield-card p-4">
                <h3 className="font-bold mb-4">Quiz Performance Analysis</h3>
                <div className="h-80 w-full">
                  <Chart
                    type="bar"
                    data={quizPerformanceData}
                    indexAxis="name"
                    datasets={[
                      {
                        label: "Average Score (%)",
                        data: "avgScore",
                        backgroundColor: "#8b5cf6",
                      },
                    ]}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  >
                    <ChartTooltip />
                    <ChartLegend />
                    <ChartTitle text="Quiz Performance by Topic" />
                  </Chart>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="text-xs text-muted-foreground text-center my-6">
            <p>This data is anonymized and used only for improving educational content.</p>
            <p>No personally identifying information is collected or stored.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminInsights;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LineChart, BarChart, Calendar, BookOpen, User, Filter } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AgeGroup } from "@/components/AgeSelector";
import {
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";
import { Chart, ChartTitle } from "@/components/ui/chart-wrapper";
import { initializeUserLearningData } from "@/utils/aiHelper";
import { themeData } from "@/data/content";

// AdminInsights Component
const AdminInsights = () => {
  const [dateRange, setDateRange] = useState("30");
  const [ageGroupFilter, setAgeGroupFilter] = useState("all");

  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
  };

  const handleAgeGroupFilterChange = (value: string) => {
    setAgeGroupFilter(value);
  };

  // Example data for charts
  const userProgressData = [
    { name: "Week 1", completed: 5, attempted: 8 },
    { name: "Week 2", completed: 8, attempted: 10 },
    { name: "Week 3", completed: 12, attempted: 15 },
    { name: "Week 4", completed: 15, attempted: 18 },
  ];

  const ageDistribution = [
    { name: "3-5", value: 15 },
    { name: "6-9", value: 25 },
    { name: "10-12", value: 30 },
    { name: "13-16", value: 20 },
    { name: "17-18", value: 10 },
  ];

  const topicEngagement = [
    { name: "Development", views: 120, completion: 85 },
    { name: "Health", views: 95, completion: 70 },
    { name: "Relationships", views: 110, completion: 75 },
    { name: "Values", views: 85, completion: 65 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">Admin Insights</h1>
                <p className="text-muted-foreground">Analytics and performance metrics</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="date-filter">Date Range</Label>
                  <Select defaultValue="30" onValueChange={handleDateRangeChange}>
                    <SelectTrigger id="date-filter" className="w-[120px]">
                      <SelectValue placeholder="Date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="all">All time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-1.5">
                  <Label htmlFor="age-filter">Age Group</Label>
                  <Select defaultValue="all" onValueChange={handleAgeGroupFilterChange}>
                    <SelectTrigger id="age-filter" className="w-[120px]">
                      <SelectValue placeholder="Age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All ages</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-9">6-9 years</SelectItem>
                      <SelectItem value="10-12">10-12 years</SelectItem>
                      <SelectItem value="13-16">13-16 years</SelectItem>
                      <SelectItem value="17-18">17-18 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-shield-purple-light p-3 rounded-lg">
                  <User className="h-5 w-5 text-shield-purple" />
                </div>
                <Button variant="ghost" size="sm">Details</Button>
              </div>
              <h3 className="text-2xl font-bold">476</h3>
              <p className="text-muted-foreground">Total Active Users</p>
              <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
            </Card>
            
            <Card className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-shield-soft-blue p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-shield-blue" />
                </div>
                <Button variant="ghost" size="sm">Details</Button>
              </div>
              <h3 className="text-2xl font-bold">1,280</h3>
              <p className="text-muted-foreground">Topic Views</p>
              <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
            </Card>
            
            <Card className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-shield-soft-pink p-3 rounded-lg">
                  <Calendar className="h-5 w-5 text-pink-500" />
                </div>
                <Button variant="ghost" size="sm">Details</Button>
              </div>
              <h3 className="text-2xl font-bold">18.5</h3>
              <p className="text-muted-foreground">Avg. Minutes per Session</p>
              <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">User Progress Over Time</h3>
                <LineChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="h-[300px]">
                <Chart 
                  type="line"
                  data={userProgressData}
                  indexAxis="name"
                  datasets={[
                    {
                      label: "Lessons Completed",
                      data: "completed",
                      borderColor: "#8b5cf6",
                    },
                    {
                      label: "Lessons Attempted",
                      data: "attempted",
                      borderColor: "#94a3b8",
                    }
                  ]}
                />
                <ChartTitle text="Weekly Learning Progress" />
              </div>
            </Card>
            
            <Card className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Content Engagement by Topic</h3>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="h-[300px]">
                <Chart 
                  type="bar"
                  data={topicEngagement}
                  indexAxis="name"
                  datasets={[
                    {
                      label: "Views",
                      data: "views",
                      backgroundColor: "#8b5cf6",
                    },
                    {
                      label: "Completion",
                      data: "completion",
                      backgroundColor: "#c4b5fd",
                    }
                  ]}
                />
                <ChartTitle text="Topic Performance Metrics" />
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="p-5 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">User Age Distribution</h3>
                  <Filter className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="h-[300px]">
                  <Chart 
                    type="pie"
                    data={ageDistribution}
                    indexAxis="name"
                    datasets={[
                      {
                        label: "Users",
                        data: "value",
                        backgroundColor: "#c4b5fd",
                      }
                    ]}
                  />
                  <ChartTitle text="Users by Age Group" />
                </div>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Most Popular Content</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="pb-2">Topic</th>
                        <th className="pb-2">Age Group</th>
                        <th className="pb-2 text-right">Views</th>
                        <th className="pb-2 text-right">Completion %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Understanding Puberty</td>
                        <td>10-12 years</td>
                        <td className="text-right">245</td>
                        <td className="text-right text-green-600">87%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Healthy Relationships</td>
                        <td>13-16 years</td>
                        <td className="text-right">218</td>
                        <td className="text-right text-green-600">82%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Family and Friends</td>
                        <td>3-5 years</td>
                        <td className="text-right">196</td>
                        <td className="text-right text-green-600">91%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Physical & Emotional Development</td>
                        <td>13-16 years</td>
                        <td className="text-right">185</td>
                        <td className="text-right text-green-600">79%</td>
                      </tr>
                      <tr>
                        <td className="py-3">Personal Safety and Respect</td>
                        <td>6-9 years</td>
                        <td className="text-right">172</td>
                        <td className="text-right text-green-600">88%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminInsights;

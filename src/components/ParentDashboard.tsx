
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, Trophy, AlertTriangle } from "lucide-react";
import { initializeUserLearningData } from "@/utils/aiHelper";
import { themeData, quizData } from "@/data/content";

interface UsageStats {
  totalTimeSpent: number;
  topicsCompleted: number; 
  quizzesCompleted: number;
  averageScore: number;
  lastActive: Date | null;
}

const ParentDashboard = () => {
  const [stats, setStats] = useState<UsageStats>({
    totalTimeSpent: 0,
    topicsCompleted: 0,
    quizzesCompleted: 0,
    averageScore: 0,
    lastActive: null
  });
  
  const [alerts, setAlerts] = useState<string[]>([]);
  
  useEffect(() => {
    // Load learning data from local storage
    const learningData = initializeUserLearningData();
    
    // Calculate statistics
    const totalTimeSpent = Object.values(learningData.timeSpent).reduce((sum, time) => sum + time, 0);
    const topicsCompleted = learningData.viewedTopics.length;
    const quizzesCompleted = learningData.completedQuizzes.length;
    
    // Calculate average quiz score
    const scores = Object.values(learningData.quizScores);
    const averageScore = scores.length > 0 
      ? scores.reduce((sum, score) => sum + score, 0) / scores.length
      : 0;
    
    setStats({
      totalTimeSpent,
      topicsCompleted,
      quizzesCompleted,
      averageScore,
      lastActive: new Date()
    });
    
    // Check for potential alerts (unusual usage patterns)
    const newAlerts: string[] = [];
    
    // Check if child is spending too much time on app
    if (totalTimeSpent > 180) { // more than 3 hours
      newAlerts.push("High screen time detected. Consider setting usage limits.");
    }
    
    // Check if child is repeatedly visiting the same topic
    const topicFrequency = learningData.viewedTopics.reduce((acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const repeatedTopics = Object.entries(topicFrequency)
      .filter(([_, count]) => count > 5)
      .map(([topic]) => {
        const themeTitle = themeData.find(t => t.id === topic)?.title || topic;
        return `Your child has visited "${themeTitle}" multiple times.`;
      });
    
    newAlerts.push(...repeatedTopics);
    
    // Check if child is struggling with quizzes
    const lowScores = Object.entries(learningData.quizScores)
      .filter(([_, score]) => score < 0.5)
      .map(([quizId]) => {
        const quizTitle = quizData.find(q => q.id === quizId)?.title || quizId;
        return `Your child scored below 50% on "${quizTitle}".`;
      });
    
    newAlerts.push(...lowScores);
    
    setAlerts(newAlerts);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Child's Learning Progress</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <div className="bg-shield-soft-blue p-3 rounded-full mb-2">
              <Clock className="h-6 w-6 text-shield-blue" />
            </div>
            <p className="text-sm text-muted-foreground">Time Spent Learning</p>
            <p className="text-xl font-bold">
              {Math.round(stats.totalTimeSpent / 60)} minutes
            </p>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex flex-col items-center">
            <div className="bg-shield-soft-pink p-3 rounded-full mb-2">
              <BookOpen className="h-6 w-6 text-pink-500" />
            </div>
            <p className="text-sm text-muted-foreground">Topics Explored</p>
            <p className="text-xl font-bold">{stats.topicsCompleted}</p>
          </div>
        </Card>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-semibold">Quiz Performance</h3>
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                <p className="font-medium">Quizzes Completed</p>
              </div>
              <p className="font-bold">{stats.quizzesCompleted}</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Average Score</span>
                <span>{Math.round(stats.averageScore * 100)}%</span>
              </div>
              <Progress value={stats.averageScore * 100} className="h-2" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-semibold">Last Active</h3>
        <Card className="p-4">
          <p>
            {stats.lastActive ? stats.lastActive.toLocaleString() : "Not yet active"}
          </p>
        </Card>
      </div>
      
      {alerts.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            Insights & Alerts
          </h3>
          <Card className="p-4 bg-amber-50 border-amber-200">
            <ul className="space-y-2">
              {alerts.map((alert, index) => (
                <li key={index} className="text-sm flex gap-2 items-start">
                  <span className="text-amber-500">•</span> 
                  <span>{alert}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-6">
        This data is stored locally on this device and is not shared.
      </div>
    </div>
  );
};

export default ParentDashboard;

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Globe, DollarSign, Calendar, Users } from "lucide-react"

export function AnalyticsDashboard() {
  const stats = [
    {
      title: "Total Trips Planned",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Globe,
    },
    {
      title: "Money Saved",
      value: "$3,240",
      change: "+8%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Days Traveled",
      value: "156",
      change: "+23%",
      trend: "up",
      icon: Calendar,
    },
    {
      title: "Travel Buddies",
      value: "18",
      change: "+5%",
      trend: "up",
      icon: Users,
    },
  ]

  const destinations = [
    { name: "Tokyo, Japan", visits: 3, savings: "$450" },
    { name: "Paris, France", visits: 2, savings: "$320" },
    { name: "Bali, Indonesia", visits: 2, savings: "$280" },
    { name: "New York, USA", visits: 4, savings: "$180" },
  ]

  const priceInsights = [
    {
      route: "NYC → London",
      bestTime: "Tuesday, 3 PM",
      avgSavings: "$120",
      confidence: "High",
    },
    {
      route: "LAX → Tokyo",
      bestTime: "Wednesday, 11 AM",
      avgSavings: "$200",
      confidence: "Medium",
    },
    {
      route: "SFO → Paris",
      bestTime: "Thursday, 2 PM",
      avgSavings: "$150",
      confidence: "High",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Travel Analytics</h2>
        <p className="text-gray-600">Insights and predictions for smarter travel decisions</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Destinations */}
        <Card>
          <CardHeader>
            <CardTitle>Top Destinations</CardTitle>
            <CardDescription>Your most visited places and savings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {destinations.map((dest, index) => (
                <div key={dest.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{dest.name}</p>
                      <p className="text-sm text-gray-600">{dest.visits} visits</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Saved {dest.savings}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Insights */}
        <Card>
          <CardHeader>
            <CardTitle>AI Price Insights</CardTitle>
            <CardDescription>Best times to book for maximum savings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {priceInsights.map((insight) => (
                <div key={insight.route} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{insight.route}</h4>
                    <Badge variant={insight.confidence === "High" ? "default" : "secondary"}>
                      {insight.confidence} Confidence
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Best Time:</span>
                      <p className="font-medium">{insight.bestTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Avg Savings:</span>
                      <p className="font-medium text-green-600">{insight.avgSavings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Travel Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Travel Patterns & Predictions</CardTitle>
          <CardDescription>AI-powered insights about your travel behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <h4 className="font-semibold text-blue-900 mb-2">Peak Season</h4>
              <p className="text-2xl font-bold text-blue-600">March - May</p>
              <p className="text-sm text-blue-700">You travel most during spring</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50">
              <h4 className="font-semibold text-purple-900 mb-2">Avg Trip Length</h4>
              <p className="text-2xl font-bold text-purple-600">6.5 days</p>
              <p className="text-sm text-purple-700">Perfect for work-life balance</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50">
              <h4 className="font-semibold text-green-900 mb-2">Budget Efficiency</h4>
              <p className="text-2xl font-bold text-green-600">87%</p>
              <p className="text-sm text-green-700">Great at finding deals!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

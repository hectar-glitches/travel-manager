"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingDown, TrendingUp, Bell, Plane, Hotel } from "lucide-react"

interface PriceAlert {
  id: string
  type: "flight" | "hotel"
  route: string
  currentPrice: number
  targetPrice: number
  change: number
  trend: "up" | "down"
}

export function PriceMonitor() {
  const [alerts, setAlerts] = useState<PriceAlert[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate real-time price updates
    const mockAlerts: PriceAlert[] = [
      {
        id: "1",
        type: "flight",
        route: "NYC → Tokyo",
        currentPrice: 1250,
        targetPrice: 1100,
        change: -50,
        trend: "down",
      },
      {
        id: "2",
        type: "hotel",
        route: "Tokyo Shibuya Hotel",
        currentPrice: 180,
        targetPrice: 150,
        change: 25,
        trend: "up",
      },
      {
        id: "3",
        type: "flight",
        route: "LAX → Paris",
        currentPrice: 890,
        targetPrice: 800,
        change: -75,
        trend: "down",
      },
    ]

    setTimeout(() => {
      setAlerts(mockAlerts)
      setIsLoading(false)
    }, 1000)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setAlerts((prev) =>
        prev.map((alert) => ({
          ...alert,
          currentPrice: alert.currentPrice + (Math.random() - 0.5) * 20,
          change: (Math.random() - 0.5) * 100,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Price Monitor</h2>
          <p className="text-gray-600">Real-time price tracking for your travel plans</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Bell className="w-4 h-4 mr-2" />
          Set New Alert
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {alerts.map((alert) => (
          <Card key={alert.id} className="relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-1 ${alert.trend === "down" ? "bg-green-500" : "bg-red-500"}`}
            />

            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {alert.type === "flight" ? (
                    <Plane className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Hotel className="w-4 h-4 text-purple-600" />
                  )}
                  <CardTitle className="text-lg">{alert.route}</CardTitle>
                </div>
                <Badge variant={alert.trend === "down" ? "default" : "destructive"}>
                  {alert.trend === "down" ? (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  )}
                  ${Math.abs(alert.change)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Current Price</span>
                  <span className="text-2xl font-bold">${alert.currentPrice.toFixed(0)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Target Price</span>
                  <span className="text-lg font-semibold text-green-600">${alert.targetPrice}</span>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      {alert.currentPrice <= alert.targetPrice ? (
                        <span className="text-green-600 font-medium">🎉 Target Reached!</span>
                      ) : (
                        <span className="text-gray-600">
                          ${(alert.currentPrice - alert.targetPrice).toFixed(0)} above target
                        </span>
                      )}
                    </span>
                    <Button size="sm" variant="outline">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Price Trends</CardTitle>
          <CardDescription>Historical price data and predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Interactive price charts would be rendered here</p>
              <p className="text-sm">Integration with Chart.js or D3.js</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"
import { TripPlannerDashboard } from "@/components/trip-planner-dashboard"
import { PriceMonitor } from "@/components/price-monitor"
import { SocialHub } from "@/components/social-hub"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, TrendingUp, Users, BarChart3 } from "lucide-react"

export default function TravelMindPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TravelMind Pro
              </h1>
            </div>
            <div className="text-sm text-gray-600">AI-Powered Travel Ecosystem</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="planner" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mx-auto">
            <TabsTrigger value="planner" className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              AI Planner
            </TabsTrigger>
            <TabsTrigger value="prices" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Price Monitor
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Social Hub
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="planner">
            <TripPlannerDashboard />
          </TabsContent>

          <TabsContent value="prices">
            <PriceMonitor />
          </TabsContent>

          <TabsContent value="social">
            <SocialHub />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

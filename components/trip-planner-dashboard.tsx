"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Sparkles, Plane, Hotel, Car } from "lucide-react"

export function TripPlannerDashboard() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [tripData, setTripData] = useState(null)

  const generateTrip = async () => {
    setIsGenerating(true)
    // Simulate AI trip generation
    setTimeout(() => {
      setTripData({
        destination: "Tokyo, Japan",
        duration: "7 days",
        budget: "$2,500",
        activities: ["Visit Senso-ji Temple", "Explore Shibuya", "Mount Fuji Day Trip", "Tsukiji Fish Market"],
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* AI Trip Input */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            AI Trip Planner
          </CardTitle>
          <CardDescription>Describe your dream trip and let AI create the perfect itinerary</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Destination</label>
              <Input placeholder="Where do you want to go?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Duration</label>
              <Input placeholder="How many days?" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Budget Range</label>
              <Input placeholder="$1000 - $3000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Travelers</label>
              <Input placeholder="2 adults" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Preferences & Interests</label>
            <Textarea
              placeholder="I love adventure activities, local cuisine, historical sites..."
              className="min-h-[100px]"
            />
          </div>

          <Button
            onClick={generateTrip}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Generating Your Perfect Trip...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate AI Trip Plan
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Plane className="w-4 h-4 mr-2" />
            Find Flights
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Hotel className="w-4 h-4 mr-2" />
            Book Hotels
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Car className="w-4 h-4 mr-2" />
            Rent a Car
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <MapPin className="w-4 h-4 mr-2" />
            Explore Activities
          </Button>
        </CardContent>
      </Card>

      {/* Generated Trip Preview */}
      {tripData && (
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-green-600" />
              Your AI-Generated Trip Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <MapPin className="w-4 h-4" />
                  Destination
                </div>
                <p className="font-semibold">{tripData.destination}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <Calendar className="w-4 h-4" />
                  Duration
                </div>
                <p className="font-semibold">{tripData.duration}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <Users className="w-4 h-4" />
                  Budget
                </div>
                <p className="font-semibold">{tripData.budget}</p>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700">Book This Trip</Button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Recommended Activities</h4>
              <div className="flex flex-wrap gap-2">
                {tripData.activities.map((activity, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

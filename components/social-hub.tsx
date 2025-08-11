"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Share2, MapPin, Users, Search } from "lucide-react"

interface TravelPost {
  id: string
  user: {
    name: string
    avatar: string
    location: string
  }
  destination: string
  image: string
  caption: string
  likes: number
  comments: number
  tags: string[]
}

interface TravelBuddy {
  id: string
  name: string
  avatar: string
  destination: string
  dates: string
  interests: string[]
  compatibility: number
}

export function SocialHub() {
  const [activeTab, setActiveTab] = useState<"feed" | "buddies">("feed")

  const posts: TravelPost[] = [
    {
      id: "1",
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "San Francisco",
      },
      destination: "Kyoto, Japan",
      image: "/placeholder.svg?height=300&width=400&text=Kyoto Temple",
      caption: "The golden hour at Kinkaku-ji Temple was absolutely magical! 🏯✨",
      likes: 127,
      comments: 23,
      tags: ["temple", "golden-hour", "peaceful"],
    },
    {
      id: "2",
      user: {
        name: "Alex Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "New York",
      },
      destination: "Santorini, Greece",
      image: "/placeholder.svg?height=300&width=400&text=Santorini Sunset",
      caption: "Blue domes and endless sunsets. Santorini never gets old! 🌅",
      likes: 89,
      comments: 15,
      tags: ["sunset", "architecture", "romantic"],
    },
  ]

  const travelBuddies: TravelBuddy[] = [
    {
      id: "1",
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      destination: "Tokyo, Japan",
      dates: "March 15-22, 2024",
      interests: ["Food", "Culture", "Photography"],
      compatibility: 95,
    },
    {
      id: "2",
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      destination: "Bali, Indonesia",
      dates: "April 1-10, 2024",
      interests: ["Adventure", "Beaches", "Yoga"],
      compatibility: 87,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Social Hub</h2>
          <p className="text-gray-600">Connect with fellow travelers and share experiences</p>
        </div>
        <div className="flex gap-2">
          <Button variant={activeTab === "feed" ? "default" : "outline"} onClick={() => setActiveTab("feed")}>
            Travel Feed
          </Button>
          <Button variant={activeTab === "buddies" ? "default" : "outline"} onClick={() => setActiveTab("buddies")}>
            Find Buddies
          </Button>
        </div>
      </div>

      {activeTab === "feed" && (
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {post.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{post.user.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {post.destination}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="px-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.destination}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <CardContent className="pt-4">
                <p className="mb-3">{post.caption}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "buddies" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Your Perfect Travel Buddy
              </CardTitle>
              <CardDescription>Match with travelers based on destination, dates, and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Input placeholder="Destination" />
                <Input placeholder="Travel dates" />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Users className="w-4 h-4 mr-2" />
                  Find Matches
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {travelBuddies.map((buddy) => (
              <Card key={buddy.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={buddy.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {buddy.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{buddy.name}</h3>
                          <Badge className="bg-green-100 text-green-800">{buddy.compatibility}% Match</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <MapPin className="w-3 h-3" />
                          {buddy.destination}
                        </div>
                        <p className="text-sm text-gray-600">{buddy.dates}</p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {buddy.interests.map((interest) => (
                          <Badge key={interest} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

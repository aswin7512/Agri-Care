import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  views: string;
  uploadDate: string;
  thumbnailUrl: string;
  videoUrl: string;
  platform: 'YouTube' | 'Facebook' | 'Instagram';
}

export function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Crop Management', 'Soil Health', 'Pest Control', 'Irrigation', 'Organic Farming', 'Equipment'];

  const videos: Video[] = [
    {
      id: 1,
      title: "Complete Guide to Tomato Farming",
      description: "Learn everything about tomato cultivation from seed to harvest",
      duration: "15:30",
      category: "Crop Management",
      views: "25.3K",
      uploadDate: "2 days ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400",
      videoUrl: "https://youtube.com/watch?v=example1",
      platform: "YouTube"
    },
    {
      id: 2,
      title: "Soil Testing and pH Management",
      description: "Understanding soil health and how to test and manage pH levels",
      duration: "12:45",
      category: "Soil Health",
      views: "18.7K",
      uploadDate: "5 days ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      videoUrl: "https://youtube.com/watch?v=example2",
      platform: "YouTube"
    },
    {
      id: 3,
      title: "Organic Pest Control Methods",
      description: "Natural ways to control pests without harmful chemicals",
      duration: "18:20",
      category: "Pest Control",
      views: "32.1K",
      uploadDate: "1 week ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      videoUrl: "https://facebook.com/watch?v=example3",
      platform: "Facebook"
    },
    {
      id: 4,
      title: "Drip Irrigation Setup Guide",
      description: "Step-by-step guide to install and maintain drip irrigation",
      duration: "22:10",
      category: "Irrigation",
      views: "41.5K",
      uploadDate: "2 weeks ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      videoUrl: "https://youtube.com/watch?v=example4",
      platform: "YouTube"
    },
    {
      id: 5,
      title: "Composting for Beginners",
      description: "How to make nutrient-rich compost at home",
      duration: "10:35",
      category: "Organic Farming",
      views: "15.8K",
      uploadDate: "3 weeks ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      videoUrl: "https://instagram.com/reel/example5",
      platform: "Instagram"
    },
    {
      id: 6,
      title: "Modern Farming Equipment Review",
      description: "Latest tools and equipment for efficient farming",
      duration: "25:45",
      category: "Equipment",
      views: "28.9K",
      uploadDate: "1 month ago",
      thumbnailUrl: "https://images.unsplash.com/photo-1690986469727-1ed8bcdf6384?w=400",
      videoUrl: "https://youtube.com/watch?v=example6",
      platform: "YouTube"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube': return '📺';
      case 'Facebook': return '📘';
      case 'Instagram': return '📸';
      default: return '🎥';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'YouTube': return 'bg-red-100 text-red-700';
      case 'Facebook': return 'bg-blue-100 text-blue-700';
      case 'Instagram': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4">🎥 Agriculture Video Library</h1>
          <p className="text-lg text-gray-600">
            Watch expert tutorials, tips, and guides to enhance your farming knowledge
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-green-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">📊</div>
              <h3>{videos.length}</h3>
              <p className="text-sm text-gray-600">Total Videos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">👁️</div>
              <h3>162K+</h3>
              <p className="text-sm text-gray-600">Total Views</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">📺</div>
              <h3>Multi-Platform</h3>
              <p className="text-sm text-gray-600">YouTube, Facebook, Instagram</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">🆕</div>
              <h3>Weekly</h3>
              <p className="text-sm text-gray-600">New Content</p>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <div onClick={() => handleVideoClick(video.videoUrl)}>
                <div className="relative">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className={getPlatformColor(video.platform)}>
                      {getPlatformIcon(video.platform)} {video.platform}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-2 mb-3">{video.description}</p>
                  <Badge variant="outline">{video.category}</Badge>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl mb-2">No videos found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Subscribe Section */}
        <Card className="mt-8 bg-green-100 border-green-300">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl mb-2">Stay Updated with Latest Videos</h3>
            <p className="mb-4">
              Follow us on social media to get notifications for new agriculture videos and tutorials
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.open('https://www.youtube.com/@arjunvlogger3344', '_blank')}
                className="bg-red-600 hover:bg-red-700"
              >
                📺 YouTube
              </Button>
              <Button 
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61574903970172', '_blank')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                📘 Facebook
              </Button>
              <Button 
                onClick={() => window.open('https://www.instagram.com/arjun_ashok__student_farmer', '_blank')}
                className="bg-pink-600 hover:bg-pink-700"
              >
                📸 Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
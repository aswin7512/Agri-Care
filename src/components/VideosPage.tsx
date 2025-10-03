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
      title: "കലാലയത്തിലെ കാർഷികാർജ്ജുനീയം",
      description: "കുട്ടനാടൻ ഗ്രാമമായ മുട്ടാറിലെ ഒരു കൊച്ചു കാർഷിക പ്രതിഭ ശ്രെദ്ധേയനാകുന്നു.തൈപറമ്പിൽ വീട്ടിലെ അർജുൻ അശോക് എന്ന പ്ലസ് ഒൺ വിദ്യാർത്ഥി പച്ചക്കറി കൃഷിയിലൂടെ മികച്ച നേട്ടം കൈവരിക്കുക വഴി നേടിയത് വിദ്യാർത്ഥി കർഷക പ്രതിഭ, ഉജ്ജ്വല ബാല്യം എന്നീ സർക്കാർ ബഹുമതികളാണ് . കൂടാതെ ഏഴാം തരത്തിലെ മലയാളം പാഠാവലിയിലും അർജുന്റെ കൃഷിമുറകൾ പ്രതിപാദിക്കുന്നു.",
      duration: "19:49",
      thumbnailUrl: "video1.jpg",
      videoUrl: "https://youtu.be/-IYpZNopsGw",
      platform: "YouTube"
    },
    {
      id: 2,
      title: "കുറച്ച് കൃഷി വിശേഷങ്ങളും വിളവെടുപ്പും 🥰🥰",
      description: "എന്റെ വീട്ടിലെ കുറച്ച കൃഷി കണ്ടാലോ ",
      duration: "09:13",
      thumbnailUrl: "video2.jpg",
      videoUrl: "https://youtu.be/3c3Ghc0tTbs",
      platform: "YouTube"
    },
    {
      id: 3,
      title: "ശീതകാല പച്ചക്കറികളുടെ സമയമായി🌱🌱",
      description: "..",
      duration: "00:46",
      thumbnailUrl: "products.png",
      videoUrl: "https://www.facebook.com/share/v/1GmGW3UUHi/",
      platform: "Facebook"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All'
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
              <h3>100%</h3>
              <p className="text-sm text-gray-600">Organic Contents</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">📺</div>
              <h3>Multi-Platform</h3>
              <p className="text-sm text-gray-600">YouTube, Facebook</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1">🆕</div>
              <h3>Frequent</h3>
              <p className="text-sm text-gray-600">New Contents</p>
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
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-2 mb-3">{video.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

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
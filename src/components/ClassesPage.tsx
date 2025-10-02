import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Class {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  level: string;
  nextSession: string;
  topics: string[];
}

export function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const classes: Class[] = [
    {
      id: 1,
      title: "Organic Farming Fundamentals",
      description: "Learn the basics of organic farming including soil preparation, composting, and natural pest management.",
      duration: "4 weeks",
      price: 1500,
      level: "Beginner",
      nextSession: "Every Monday 7:00 PM",
      topics: ["Soil Health", "Composting", "Natural Fertilizers", "Pest Management"]
    },
    {
      id: 2,
      title: "Advanced Crop Management",
      description: "Master advanced techniques for maximizing crop yields while maintaining sustainability.",
      duration: "6 weeks",
      price: 2500,
      level: "Intermediate",
      nextSession: "Every Wednesday 8:00 PM",
      topics: ["Precision Agriculture", "Disease Control", "Harvest Optimization", "Market Analysis"]
    },
    {
      id: 3,
      title: "Hydroponics & Modern Farming",
      description: "Explore soilless farming techniques and modern agricultural technologies.",
      duration: "8 weeks",
      price: 3500,
      level: "Advanced",
      nextSession: "Every Friday 7:30 PM",
      topics: ["Hydroponic Systems", "Nutrient Solutions", "Automation", "Greenhouse Management"]
    },
    {
      id: 4,
      title: "Dairy Farming Excellence",
      description: "Complete guide to dairy farming operations, from cattle care to milk production.",
      duration: "5 weeks",
      price: 2000,
      level: "Intermediate",
      nextSession: "Every Saturday 6:00 PM",
      topics: ["Cattle Nutrition", "Milking Systems", "Health Management", "Business Planning"]
    }
  ];

  const handleJoinWhatsApp = (className: string) => {
    const message = `Hi! I'm interested in joining the "${className}" class. Please add me to the WhatsApp group.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEnrollment = (classItem: Class) => {
    const message = `Hi! I want to enroll in "${classItem.title}" course (₹${classItem.price}). Please share payment details.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4">📚 Online Agriculture Classes</h1>
          <p className="text-lg text-gray-600 mb-6">
            Learn from experts through interactive weekly sessions and join our exclusive WhatsApp learning communities
          </p>
          <ImageWithFallback
            src="course.jpeg"
            alt="Online education"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
          />
        </div>

        {/* Class Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🎓</div>
              <h3>Expert Instructors</h3>
              <p>Learn from certified agriculture professionals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3>WhatsApp Groups</h3>
              <p>Exclusive groups for discussions and support</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h3>Certificates</h3>
              <p>Get recognized certification upon completion</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3>Affordable Fees</h3>
              <p>Quality education at reasonable prices</p>
            </CardContent>
          </Card>
        </div>

        {/* Available Classes */}
        <div className="grid lg:grid-cols-2 gap-6">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{classItem.title}</CardTitle>
                    <Badge variant="outline">{classItem.level}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-green-600">₹{classItem.price}</p>
                    <p className="text-sm text-gray-500">{classItem.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{classItem.description}</p>
                
                <div className="mb-4">
                  <h4 className="mb-2">📅 Schedule:</h4>
                  <p className="text-green-600">{classItem.nextSession}</p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2">📋 Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {classItem.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleEnrollment(classItem)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    💳 Enroll Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleJoinWhatsApp(classItem.title)}
                    className="flex-1"
                  >
                    📱 Join WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How Our Classes Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4>Choose Course</h4>
                <p>Select the course that matches your needs and experience level</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4>Make Payment</h4>
                <p>Pay through WhatsApp and get instant confirmation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4>Join Group</h4>
                <p>Get added to exclusive WhatsApp group for your course</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">4️⃣</div>
                <h4>Attend Classes</h4>
                <p>Join weekly live sessions and interact with experts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Custom Training */}
        <Card className="mt-8 bg-green-100 border-green-300">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl mb-2">Need Custom Training?</h3>
            <p className="mb-4">
              We also offer customized training programs for farming communities, 
              cooperatives, and agricultural organizations.
            </p>
            <Button 
              onClick={() => handleJoinWhatsApp("Custom Training Inquiry")}
              className="bg-green-600 hover:bg-green-700"
            >
              📞 Contact for Custom Training
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
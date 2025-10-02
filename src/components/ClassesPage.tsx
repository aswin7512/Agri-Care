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

  const handleJoinWhatsApp = (className: string) => {
    const message = `Hi! I'm interested in joining the class.`;
    const whatsappUrl = `https://wa.me/917012742100?text=${encodeURIComponent(message)}`;
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
            src="course.jpg"
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
              <div className="text-3xl mb-2">🏠</div>
              <h3>Flexible Classes</h3>
              <p>Get your classes and courses at your comfort</p>
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
            <h3 className="text-xl mb-2">Contact Us...</h3>
            <p className="mb-4">
              We also offer customized training programs for farming communities, 
              cooperatives, and agricultural organizations.
            </p>
            <Button 
              onClick={() => handleJoinWhatsApp("Training Enquiry...")}
              className="bg-green-600 hover:bg-green-700"
            >
              📞 Chat on Whatsapp...
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
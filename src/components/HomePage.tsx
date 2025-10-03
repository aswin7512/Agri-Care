import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src="cover.jpeg"
          alt="Agriculture field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">Welcome to Arjun's Agri Care</h1>
            <p className="text-xl">Empowering Farmers Through Knowledge & Technology</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Website Vision */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl mb-6 text-green-700">Our Vision</h2>
              <p className="text-lg mb-4">
                To revolutionize agriculture through digital innovation, connecting farmers with expert knowledge, 
                cutting-edge techniques, and quality products to ensure sustainable farming practices.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <h3>Mission</h3>
                  <p>Provide accessible agricultural education and resources to farmers worldwide</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌍</div>
                  <h3>Impact</h3>
                  <p>Supporting sustainable farming practices for a better tomorrow</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <h3>Community</h3>
                  <p>Building a network of knowledgeable and successful farmers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Owner */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ImageWithFallback
                src="arjun.jpg"
                alt="Farm owner portrait"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-4 text-green-700">About Arjun Ashok</h2>
              <p className="mb-4">
                <li>State Best Student Farmer Award Winner 2022-2023 Constrituded by P Prasad, Kerala Agriculture minister</li>
                <li>District Bala Parliament Minister for Forest, Agriculture, and Environment</li>
                <li>Ujjwalabalyam Award Recipient 2023 Constrituded by Veena George Health minister</li>
                <li>Nava Kerala Sadas Representative</li>
                <li>Featured in the Class 7 Textbook</li>
                <li>Participant in the Chief Minister’s Face-to-Face Programme</li>
              </p>
            </div>
          </div>
        </section>


        {/* Website Use */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl mb-6 text-green-700">How to Use This Website</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl mb-2">💬</div>
                  <h4>Ask Expert</h4>
                  <p>Get instant answers to your farming questions through our AI chatbot</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <h4>Join Classes</h4>
                  <p>Enroll in weekly online agriculture classes and WhatsApp groups</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎥</div>
                  <h4>Watch Videos</h4>
                  <p>Access our library of educational agriculture videos and tutorials</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🛒</div>
                  <h4>Buy Products</h4>
                  <p>Purchase quality agricultural products directly through WhatsApp</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
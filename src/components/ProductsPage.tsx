import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  inStock: boolean;
  rating: number;
  imageUrl: string;
  features: string[];
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Seeds', 'Fertilizers', 'Tools', 'Equipment', 'Pesticides', 'Irrigation'];

  const products: Product[] = [
    {
      id: 1,
      name: "Organic Tomato Seeds",
      description: "High-yield hybrid tomato seeds suitable for all seasons",
      price: 150,
      unit: "100g pack",
      category: "Seeds",
      inStock: true,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400",
      features: ["High yield", "Disease resistant", "Organic certified"]
    },
    {
      id: 2,
      name: "Bio-NPK Fertilizer",
      description: "Organic NPK fertilizer for balanced plant nutrition",
      price: 450,
      unit: "5kg bag",
      category: "Fertilizers",
      inStock: true,
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      features: ["100% organic", "Slow release", "Eco-friendly"]
    },
    {
      id: 3,
      name: "Professional Garden Hoe",
      description: "Durable steel hoe for effective soil cultivation",
      price: 850,
      unit: "piece",
      category: "Tools",
      inStock: true,
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1690986469727-1ed8bcdf6384?w=400",
      features: ["Steel blade", "Wooden handle", "Ergonomic design"]
    },
    {
      id: 4,
      name: "Drip Irrigation Kit",
      description: "Complete drip irrigation system for small farms",
      price: 2500,
      unit: "kit",
      category: "Irrigation",
      inStock: true,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      features: ["Water efficient", "Easy installation", "Covers 500 sq ft"]
    },
    {
      id: 5,
      name: "Neem Oil Pesticide",
      description: "Natural neem oil for organic pest control",
      price: 320,
      unit: "1L bottle",
      category: "Pesticides",
      inStock: false,
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      features: ["100% natural", "Safe for crops", "Broad spectrum"]
    },
    {
      id: 6,
      name: "Soil pH Test Kit",
      description: "Digital pH meter for accurate soil testing",
      price: 1200,
      unit: "piece",
      category: "Equipment",
      inStock: true,
      rating: 4.4,
      imageUrl: "https://images.unsplash.com/photo-1690986469727-1ed8bcdf6384?w=400",
      features: ["Digital display", "Battery operated", "Accurate readings"]
    },
    {
      id: 7,
      name: "Wheat Seeds (HD-2967)",
      description: "High-yielding wheat variety suitable for irrigated conditions",
      price: 200,
      unit: "1kg pack",
      category: "Seeds",
      inStock: true,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      features: ["High yield", "Disease resistant", "120 days maturity"]
    },
    {
      id: 8,
      name: "Vermicompost",
      description: "Premium quality vermicompost for organic farming",
      price: 300,
      unit: "10kg bag",
      category: "Fertilizers",
      inStock: true,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      features: ["Nutrient rich", "Improves soil structure", "100% organic"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePurchase = (product: Product) => {
    const message = `Hi! I'm interested in purchasing:\n\n*${product.name}*\nPrice: ₹${product.price} per ${product.unit}\n\nPlease share your catalog and payment details.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCatalogRequest = () => {
    const message = "Hi! I would like to see your complete agriculture products catalog. Please share it.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return "⭐".repeat(Math.floor(rating)) + (rating % 1 ? "⭐" : "");
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4">🛒 Agriculture Products Store</h1>
          <p className="text-lg text-gray-600 mb-6">
            Quality agricultural products delivered to your doorstep via WhatsApp ordering
          </p>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1755353548493-b169b68bc6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHByb2R1Y3RzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTk0MTU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Agriculture products"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* WhatsApp Catalog Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={handleCatalogRequest}
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
          >
            📱 Get Complete WhatsApp Catalog
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Get our full product catalog with prices and availability on WhatsApp
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search products..."
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

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-green-600">
                    ₹{product.price}
                    <span className="text-sm text-gray-500">/{product.unit}</span>
                  </div>
                  <div className="text-sm">
                    {renderStars(product.rating)} ({product.rating})
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="mb-4">
                  <h5 className="mb-2">Features:</h5>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button
                  onClick={() => handlePurchase(product)}
                  disabled={!product.inStock}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {product.inStock ? "🛒 Order via WhatsApp" : "😞 Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery to your farm within 2-3 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3>Quality Assured</h3>
              <p>All products are tested and certified</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive prices with bulk discounts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3>Expert Support</h3>
              <p>Get guidance on product usage from experts</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8 bg-green-100 border-green-300">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl mb-2">Need Help Choosing Products?</h3>
            <p className="mb-4">
              Our agriculture experts are here to help you select the right products for your farming needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={handleCatalogRequest}
                className="bg-green-600 hover:bg-green-700"
              >
                📱 WhatsApp: +91 12345 67890
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('tel:+911234567890', '_self')}
              >
                📞 Call: +91 12345 67890
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Available Mon-Sat: 9 AM - 6 PM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
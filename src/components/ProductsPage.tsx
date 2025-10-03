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

  const handleCatalogRequest = () => {
    const whatsappUrl = `https://wa.me/c/917012742100`;
    window.open(whatsappUrl, '_blank');
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
            src="products.png"
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
            📱 Get Out Product Catalog
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Get our full product catalog with prices and availability on WhatsApp
          </p>
        </div>

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
                📱 WhatsApp: +91 70127 42100
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('tel:+917012742100', '_self')}
              >
                📞 Call: +91 70127 42100
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
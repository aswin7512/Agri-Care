import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your agricultural expert assistant. I can help you with farming questions, crop management, soil health, pest control, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const commonQuestions = [
    "How to improve soil fertility?",
    "Best time to plant tomatoes?",
    "Organic pest control methods",
    "Crop rotation benefits",
    "Water management tips",
    "Fertilizer recommendations"
  ];

  const getResponse = (question: string): string => {
    const responses: { [key: string]: string } = {
      "soil fertility": "To improve soil fertility: 1) Add organic compost regularly 2) Use crop rotation 3) Test soil pH and adjust accordingly 4) Apply organic fertilizers 5) Avoid over-tilling. Regular soil testing helps monitor nutrient levels.",
      "tomatoes": "Best time to plant tomatoes is during spring (March-April) for summer harvest or late summer (July-August) for winter harvest. Ensure soil temperature is above 60°F and no frost risk.",
      "pest control": "Organic pest control methods: 1) Neem oil spray 2) Companion planting 3) Beneficial insects 4) Diatomaceous earth 5) Soap spray solution 6) Crop rotation to break pest cycles.",
      "crop rotation": "Crop rotation benefits: 1) Prevents soil nutrient depletion 2) Breaks disease cycles 3) Controls pests naturally 4) Improves soil structure 5) Reduces need for chemical inputs.",
      "water": "Water management tips: 1) Use drip irrigation 2) Mulch to retain moisture 3) Water early morning 4) Check soil moisture regularly 5) Collect rainwater 6) Choose drought-resistant varieties.",
      "fertilizer": "Choose fertilizers based on soil test results. Organic options: compost, manure, bone meal. NPK ratios vary by crop - leafy greens need high N, flowering plants need high P, root crops need high K."
    };

    for (const key in responses) {
      if (question.toLowerCase().includes(key)) {
        return responses[key];
      }
    }
    
    return "Thank you for your question! For specific agricultural advice tailored to your location and crop type, I recommend consulting with local agricultural extension services or joining our weekly classes for detailed guidance.";
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputText("");
  };

  const handleQuestionClick = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl mb-2">🤖 Agricultural Expert Assistant</h1>
          <p className="text-gray-600">Get instant answers to your farming questions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-96">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">💬</span>
                  Chat with Expert
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-sm p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask your farming question..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} className="bg-green-600 hover:bg-green-700">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Questions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {commonQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Expert Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Soil Health</Badge>
                  <Badge variant="secondary">Crop Management</Badge>
                  <Badge variant="secondary">Pest Control</Badge>
                  <Badge variant="secondary">Irrigation</Badge>
                  <Badge variant="secondary">Fertilizers</Badge>
                  <Badge variant="secondary">Weather</Badge>
                  <Badge variant="secondary">Harvesting</Badge>
                  <Badge variant="secondary">Storage</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
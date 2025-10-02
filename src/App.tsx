import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ChatbotPage } from "./components/ChatbotPage";
import { ClassesPage } from "./components/ClassesPage";
import { VideosPage } from "./components/VideosPage";
import { ProductsPage } from "./components/ProductsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'classes':
        return <ClassesPage />;
      case 'videos':
        return <VideosPage />;
      case 'products':
        return <ProductsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4">🌱 Arjun's Agri Care</h3>
              <p className="text-green-200">
                Empowering farmers through knowledge, technology, and quality products.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200">
                <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button onClick={() => setCurrentPage('chatbot')}>Ask Expert</button></li>
                <li><button onClick={() => setCurrentPage('classes')}>Classes</button></li>
                <li><button onClick={() => setCurrentPage('videos')}>Videos</button></li>
                <li><button onClick={() => setCurrentPage('products')}>Products</button></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contact Info</h4>
              <ul className="space-y-2 text-green-200">
                <li>📱 +91 70127 42100</li>
                <li>📧 arjunashokjanu23@gmail.com</li>
                <li>📍 Thyparampil (H) Mithrakary P.O Alappuzha</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button 
                  onClick={() => window.open('https://youtube.com/@arjunvlogger3344?si=JLf_x70Fffo11G-8', '_blank')}
                  className="text-2xl hover:text-green-300"
                >
                  <img src='youtube.png' width='50%' height='50%'></img>
                </button>
                <button 
                  onClick={() => window.open('https://www.facebook.com/share/17Z4VzEDKT/', '_blank')}
                  className="text-2xl hover:text-green-300"
                >
                  <img src='facebook.png' width='50%' height='50%'></img>
                </button>
                <button 
                  onClick={() => window.open('https://www.instagram.com/arjun_ashok__student_farmer?utm_source=qr&igsh=MXM0YzNuaXpob2t4MQ==', '_blank')}
                  className="text-2xl hover:text-green-300"
                >
                  <img src='instagram.png' width='50%' height='50%'></img>
                </button>
                <button 
                  onClick={() => window.open('https://whatsapp.com/channel/0029Va6drC69Bb61MGuVP33P', '_blank')}
                  className="text-2xl hover:text-green-300"
                >
                  <img src='whatsapp.png' width='50%' height='50%'></img>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-200">
            <p>&copy; 2024 Arjun's Agri Care. All rights reserved. | Empowering Agriculture Through Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
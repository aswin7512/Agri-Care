import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'chatbot', label: 'Ask Expert', icon: '💬' },
  { id: 'classes', label: 'Classes', icon: '📚' },
  { id: 'videos', label: 'Videos', icon: '🎥' },
  { id: 'products', label: 'Products', icon: '🛒' }
];

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl">🌱</span>
            <h1 className="ml-2">Arjun's Agri Care</h1>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                onClick={() => setCurrentPage(item.id)}
                className="text-white hover:bg-green-700"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>
          
          <div className="md:hidden">
            <select 
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="bg-green-700 text-white rounded px-2 py-1"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.icon} {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
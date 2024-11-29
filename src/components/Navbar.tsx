import { Home, Video, BookOpen, Newspaper } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", path: "/" },
    { icon: <Video className="w-5 h-5" />, label: "Watch", path: "/watch" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Manga", path: "/manga" },
    { icon: <Newspaper className="w-5 h-5" />, label: "News", path: "/news" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AnimeHub
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 text-sm hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
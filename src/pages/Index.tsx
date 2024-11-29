import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-dark z-10" />
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/4cc3b809-0e98-4a7b-b9a9-cb074bb4d3c8.png"
            alt="Anime background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to AnimeHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Your ultimate destination for anime and manga content. Discover, watch, and read your favorite series all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/watch">
                <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg">
                  Start Watching
                </Button>
              </Link>
              <Link to="/manga">
                <Button variant="outline" className="border-secondary hover:bg-secondary/10 text-secondary px-8 py-6 text-lg">
                  Read Manga
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, BookOpen, Newspaper } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-dark to-dark/90">
        <div className="relative container mx-auto px-4 pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to AnimeHub
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Your ultimate destination for anime and manga content. Discover, watch, and read your favorite series all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/watch">
              <Button className="bg-white hover:bg-gray-100 text-dark font-semibold">
                Start Watching
              </Button>
            </Link>
            <Link to="/manga">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Read Manga
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Watch Anime */}
          <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Watch Anime</h3>
            <p className="text-gray-400">
              Stream your favorite anime series from multiple legal sources in high quality.
            </p>
          </div>

          {/* Read Manga */}
          <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Read Manga</h3>
            <p className="text-gray-400">
              Access a vast library of manga across different genres and publishers.
            </p>
          </div>

          {/* Stay Updated */}
          <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Newspaper className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Get the latest news and updates from the anime and manga industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
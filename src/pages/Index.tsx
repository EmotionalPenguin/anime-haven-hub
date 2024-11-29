import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const trendingSearches = [
  "Dandadan", "Solo Leveling", "Blue Box", "One Piece", "Blue Lock",
  "Re:ZERO -Starting Life in Another World",
  "Loner Life in Another World", "Dragon Ball Daima", "Attack on Titan"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              h!anime
            </h1>

            {/* Search Section */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Input
                type="text"
                placeholder="Search anime..."
                className="w-full h-12 pl-4 pr-12 text-lg bg-white text-dark rounded-lg"
              />
              <Button
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Trending Searches */}
            <div className="max-w-4xl mx-auto text-gray-300">
              <p className="mb-2 text-sm">Top search:</p>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term, index) => (
                  <span key={index} className="text-sm">
                    {term}{index !== trendingSearches.length - 1 ? "," : ""}{" "}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image and CTA */}
            <div className="relative mt-12 h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent z-10" />
              <img
                src="/lovable-uploads/4cc3b809-0e98-4a7b-b9a9-cb074bb4d3c8.png"
                alt="Anime characters"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <Link to="/watch">
                  <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg rounded-full">
                    Watch anime
                    <span className="ml-2">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-primary mb-1">Share H!Anime</h3>
            <p className="text-gray-400">to your friends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
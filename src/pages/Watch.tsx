import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface StreamingPlatform {
  name: string;
  url: string;
  description: string;
  logo: string;
}

const streamingPlatforms: StreamingPlatform[] = [
  {
    name: "Crunchyroll",
    url: "https://www.crunchyroll.com",
    description: "World's largest anime streaming platform",
    logo: "/lovable-uploads/b79b4bbd-afc6-4005-8a3b-3844ad63de22.png"
  },
  {
    name: "Funimation",
    url: "https://www.funimation.com",
    description: "Home to a large collection of dubbed anime",
    logo: "/lovable-uploads/448a9aa4-262f-4dd4-942f-feb62fe592cc.png"
  },
  {
    name: "Netflix Anime",
    url: "https://www.netflix.com/browse/genre/7424",
    description: "Netflix's dedicated anime collection",
    logo: "/lovable-uploads/953ab87c-2de0-4edc-b6cd-cb22af3766cb.png"
  },
  {
    name: "HIDIVE",
    url: "https://www.hidive.com",
    description: "Specialized anime streaming service",
    logo: "/lovable-uploads/9d1f2de6-c402-45e3-9160-741bb1c242fa.png"
  }
];

const Watch = () => {
  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Watch Anime
        </h1>
        <p className="text-gray-300 mb-8">
          Find your favorite anime on these legal streaming platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streamingPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-dark border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-32 h-32 mb-4 mx-auto object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-400 mb-4">{platform.description}</p>
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">
                  Visit Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
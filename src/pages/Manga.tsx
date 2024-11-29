import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface MangaPlatform {
  name: string;
  url: string;
  description: string;
  genres: string[];
  logo: string;
}

const mangaPlatforms: MangaPlatform[] = [
  {
    name: "VIZ",
    url: "https://www.viz.com",
    description: "Official manga publisher and reader",
    genres: ["Shonen", "Shojo", "Seinen"],
    logo: "/placeholder.svg"
  },
  {
    name: "MANGA Plus",
    url: "https://mangaplus.shueisha.co.jp",
    description: "Official Shueisha manga platform",
    genres: ["Shonen", "Action", "Adventure"],
    logo: "/placeholder.svg"
  },
  {
    name: "Comixology",
    url: "https://www.comixology.com/manga",
    description: "Digital manga store",
    genres: ["Various", "Digital", "Multiple Publishers"],
    logo: "/placeholder.svg"
  },
  {
    name: "Book Walker",
    url: "https://global.bookwalker.jp",
    description: "Japanese digital bookstore",
    genres: ["Light Novels", "Manga", "Digital"],
    logo: "/placeholder.svg"
  }
];

const Manga = () => {
  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Read Manga
        </h1>
        <p className="text-gray-300 mb-8">
          Discover manga on these legal reading platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mangaPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-dark border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-16 h-16 mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-400 mb-4">{platform.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {platform.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded"
                  >
                    {genre}
                  </span>
                ))}
              </div>
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

export default Manga;
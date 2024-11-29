import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "/lovable-uploads/4cc3b809-0e98-4a7b-b9a9-cb074bb4d3c8.png",
    title: "Discover Anime",
    description: "Stream your favorite shows",
  },
  {
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    title: "Read Manga",
    description: "Explore vast manga collections",
  },
  {
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop",
    title: "Stay Updated",
    description: "Latest anime news and releases",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            Welcome to AnimeHub
          </h1>
          
          <div className="mt-12 mb-16">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10" />
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                        <p className="text-lg text-gray-200">{slide.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Link to="/watch">
              <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg w-48">
                Start Watching
              </Button>
            </Link>
            <Link to="/manga">
              <Button 
                variant="outline" 
                className="border-secondary hover:bg-secondary/10 text-secondary px-8 py-6 text-lg w-48"
              >
                Read Manga
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
import { useQuery } from "@tanstack/react-query";
import { fetchAnimeNews, fetchMangaNews } from "@/utils/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const News = () => {
  const { data: animeNews, isLoading: animeLoading } = useQuery({
    queryKey: ['animeNews'],
    queryFn: fetchAnimeNews,
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  const { data: mangaNews, isLoading: mangaLoading } = useQuery({
    queryKey: ['mangaNews'],
    queryFn: fetchMangaNews,
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Anime & Manga News
        </h1>

        <Tabs defaultValue="anime" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-dark">
            <TabsTrigger value="anime">Anime News</TabsTrigger>
            <TabsTrigger value="manga">Manga News</TabsTrigger>
          </TabsList>

          <TabsContent value="anime">
            <ScrollArea className="h-[70vh]">
              {animeLoading ? (
                <p className="text-center text-gray-400">Loading anime news...</p>
              ) : (
                <div className="grid gap-4">
                  {animeNews?.map((news: any) => (
                    <Card key={news.mal_id} className="bg-dark border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">
                          {news.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {new Date(news.date).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{news.excerpt}</p>
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-hover mt-2 inline-block"
                        >
                          Read more →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="manga">
            <ScrollArea className="h-[70vh]">
              {mangaLoading ? (
                <p className="text-center text-gray-400">Loading manga news...</p>
              ) : (
                <div className="grid gap-4">
                  {mangaNews?.map((news: any) => (
                    <Card key={news.mal_id} className="bg-dark border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">
                          {news.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {new Date(news.date).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{news.excerpt}</p>
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-hover mt-2 inline-block"
                        >
                          Read more →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default News;
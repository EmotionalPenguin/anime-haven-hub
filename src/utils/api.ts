// Helper function to add delay between requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAnimeNews = async () => {
  try {
    // First get top anime
    const topAnimeResponse = await fetch('https://api.jikan.moe/v4/top/anime?limit=5');
    if (!topAnimeResponse.ok) {
      throw new Error(`HTTP error! status: ${topAnimeResponse.status}`);
    }
    const topAnimeData = await topAnimeResponse.json();
    
    // Wait 1 second before making the next request to respect rate limits
    await delay(1000);
    
    // Then get news for the first anime in the list
    if (topAnimeData.data && topAnimeData.data[0]) {
      const animeId = topAnimeData.data[0].mal_id;
      const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/news`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching anime news:', error);
    return []; // Return empty array instead of throwing to prevent UI breaks
  }
};

export const fetchMangaNews = async () => {
  try {
    // First get top manga
    const topMangaResponse = await fetch('https://api.jikan.moe/v4/top/manga?limit=5');
    if (!topMangaResponse.ok) {
      throw new Error(`HTTP error! status: ${topMangaResponse.status}`);
    }
    const topMangaData = await topMangaResponse.json();
    
    // Wait 1 second before making the next request to respect rate limits
    await delay(1000);
    
    // Then get news for the first manga in the list
    if (topMangaData.data && topMangaData.data[0]) {
      const mangaId = topMangaData.data[0].mal_id;
      const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaId}/news`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching manga news:', error);
    return []; // Return empty array instead of throwing to prevent UI breaks
  }
};
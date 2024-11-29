export const fetchAnimeNews = async () => {
  try {
    // First get top anime
    const topAnimeResponse = await fetch('https://api.jikan.moe/v4/top/anime?limit=5');
    const topAnimeData = await topAnimeResponse.json();
    
    // Then get news for the first anime in the list
    if (topAnimeData.data && topAnimeData.data[0]) {
      const animeId = topAnimeData.data[0].mal_id;
      const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/news`);
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching anime news:', error);
    throw error;
  }
};

export const fetchMangaNews = async () => {
  try {
    // First get top manga
    const topMangaResponse = await fetch('https://api.jikan.moe/v4/top/manga?limit=5');
    const topMangaData = await topMangaResponse.json();
    
    // Then get news for the first manga in the list
    if (topMangaData.data && topMangaData.data[0]) {
      const mangaId = topMangaData.data[0].mal_id;
      const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaId}/news`);
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching manga news:', error);
    throw error;
  }
};
// Helper function to add delay between requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to fetch with retry logic
const fetchWithRetry = async (url: string, retries = 3, baseDelay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response;
      }
      if (response.status === 429) {
        // Exponential backoff
        const waitTime = baseDelay * Math.pow(2, i);
        await delay(waitTime);
        continue;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await delay(baseDelay * Math.pow(2, i));
    }
  }
  throw new Error('Max retries reached');
};

export const fetchAnimeNews = async () => {
  try {
    // First get top anime
    const topAnimeResponse = await fetchWithRetry('https://api.jikan.moe/v4/top/anime?limit=5');
    const topAnimeData = await topAnimeResponse.json();
    
    // Wait before making the next request
    await delay(2000);
    
    // Then get news for the first anime in the list
    if (topAnimeData.data && topAnimeData.data[0]) {
      const animeId = topAnimeData.data[0].mal_id;
      const response = await fetchWithRetry(`https://api.jikan.moe/v4/anime/${animeId}/news`);
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
    const topMangaResponse = await fetchWithRetry('https://api.jikan.moe/v4/top/manga?limit=5');
    const topMangaData = await topMangaResponse.json();
    
    // Wait before making the next request
    await delay(2000);
    
    // Then get news for the first manga in the list
    if (topMangaData.data && topMangaData.data[0]) {
      const mangaId = topMangaData.data[0].mal_id;
      const response = await fetchWithRetry(`https://api.jikan.moe/v4/manga/${mangaId}/news`);
      const data = await response.json();
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching manga news:', error);
    return []; // Return empty array instead of throwing to prevent UI breaks
  }
};
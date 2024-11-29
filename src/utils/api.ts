export const fetchAnimeNews = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime/news');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching anime news:', error);
    throw error;
  }
};

export const fetchMangaNews = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/manga/news');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching manga news:', error);
    throw error;
  }
};
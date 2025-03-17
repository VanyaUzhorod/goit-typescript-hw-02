import axios from "axios";

const API_KEY = "9LIPfd5ZKygIEmPO9NWTIxJATudgrLcLukeJH7Jmt3M";
const API_URL = "https://api.unsplash.com/search/photos";

const fetchRequest = async (query, page) => {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        query: query,
        page,
        client_id: API_KEY,
        per_page: 16,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching images:",
      error.response?.data || error.message
    );
    return [];
  }
};

export default fetchRequest;

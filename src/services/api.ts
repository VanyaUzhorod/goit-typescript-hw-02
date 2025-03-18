import axios from "axios";
import { ImagesResponse } from "../types";

const API_KEY = "9LIPfd5ZKygIEmPO9NWTIxJATudgrLcLukeJH7Jmt3M";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (
  query: string,
  page = 1,
  perPage = 12
): Promise<ImagesResponse> => {
  const response = await axios.get<ImagesResponse>(
    `${BASE_URL}/search/photos`,
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );

  return response.data;
};

export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

export interface ImagesResponse {
  results: Image[];
  total_pages: number;
}

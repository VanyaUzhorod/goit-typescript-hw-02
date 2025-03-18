import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import toast from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.total_pages);
        if (data.results.length === 0) {
          toast.error("No images found. Try a different query.");
          setError(true);
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);
  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a search query.");
      return;
    }

    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleOpenModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && (
        <ErrorMessage message="Something went wrong. Please try again." />
      )}
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {loading && <Loader />}
      {page < totalPages && images.length > 0 && !loading && (
        <LoadMoreBtn handleClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={() => {
            setSelectedImage(null);
            setIsOpen(false);
          }}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;

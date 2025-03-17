import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchRequest from "./services/api.js";

const App = () => {
  const [hit, setHit] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await fetchRequest(query, page);
        if (data.length === 0) {
          toast.error("No images found for this request! 😕", {
            style: {
              background: "#b1cc29",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          });
        }
        setHit((prev) => [...prev, ...data]);
      } catch (error) {
        console.error(error);
        setIsError(true);
        toast.error(
          "There was an error loading images, please try again later😢",
          {
            style: {
              background: "red",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          }
        );
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setHit([]);
    setPage(1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <Toaster />
      <SearchBar request={handleSetQuery} />

      {!isError ? (
        <ImageGallery image={hit} onImageClick={openModal} />
      ) : (
        <ErrorMessage />
      )}

      <Loader loading={isLoading} />

      {hit.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default App;

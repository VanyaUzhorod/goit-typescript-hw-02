import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ request }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (evt) => {
    setQuery(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query) {
      toast("I'm waiting for your request", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-left",
      });
      return;
    }
    request(query);
    setQuery("");
  };

  return (
    <header>
      <form className={css.inputForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleQuery}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Hunt Photos"
        />
        <button className={css.buttonSearch} type="submit">
          Images Hunt
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

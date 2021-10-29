import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ handleSearch }) {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
    setText("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          placeholder="Search a movie"
          autoFocus={true}
          onChange={handleInput}
          className={styles.search}
        />
        <button onClick={handleSubmit} className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;

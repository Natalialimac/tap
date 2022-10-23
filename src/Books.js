import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY_BOOK}`
      );
      setBooks(res.data.results.books);
    };

    fetchStories();
  }, []);

  const filterBooks = books.filter((book) =>
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Home />

      <input
        type="type"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      
      <h1>Livros</h1>

      <sectio>
        {filterBooks.map((books) => {
          const { author, book_image, description, rank, title } = books;
          return (
            <article key={rank}>
              <div>
                <img src={book_image} alt={title} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{author}</p>
              </div>
            </article>
          );
        })}
      </sectio>
    </div>
  );
};

export default Books;

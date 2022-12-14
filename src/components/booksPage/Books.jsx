import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../homePage/Home";
import './style.css';

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
    <>
      <Home text={"Procure aqui o nome do autor"} />

      <input
        type="type"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      
      <ul>
        {filterBooks.map((books) => {
          const { author,rank } = books;
          return (
            <li key={rank}>
              <div class="text">
                <p>{author}</p>
              </div>
            </li>
          );
        })}
      </ul> 
      
      <h1>Livros</h1>

      <ul>
        {filterBooks.map((books) => {
          const { author, book_image, description, rank, title } = books;
          return (
            <li key={rank}>
              <div class="book">
              <div>
                <img src={book_image} alt={title} />
              </div>

              <div class="text">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{author}</p>
              </div>
              </div>
            </li>
          );
        })}
      </ul>

     
    </>
  );
};

export default Books;

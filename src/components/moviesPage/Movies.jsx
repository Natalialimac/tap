import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../homePage/Home";
import './style.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${process.env.REACT_APP_API_KEY_MOVIES}`
      );
      setMovies(res.data.results)
    };

    fetchStories();
  }, []);

  const filterMovies = movies.filter((movies) =>
    movies.display_title
    .toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Home text={"Procure aqui o nome do direitor "} />

      <input
        type="type"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      
      <ul>
        {filterMovies.map((movies) => {
          const { display_title
            ,rank } = movies;
          return (
            <li key={rank}>
              <div class="text">
                <p>{display_title}</p>
              </div>
            </li>
          );
        })}
      </ul> 
      
      <h1>Filmes</h1>

      <ul>
        {filterMovies.map((movies) => {
          const { display_title, multimedia,rank, opening_date, headline, link} = movies;
          return (
            <li key={rank}>
              <div class="book">
              <div>
                <img src={multimedia?.src} alt={headline} />
              </div>

              <div class="text">
                <h3>{display_title}</h3>
                <p>{opening_date}</p>
                <a href={link.url}> Para mais informaçẽs </a>
              </div>
              </div>
            </li>
          );
        })}
      </ul>

     
    </>
  );
};

export default Movies;

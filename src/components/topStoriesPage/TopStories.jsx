import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../homePage/Home"

const TopStories = () => {
  const [stories, setStories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      );
      setStories(res.data.results);
    };

    fetchStories();
  }, []);

  const filterStories = stories.filter((storie) =>
    storie.subsection.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Home text={"Pesquise o ramo desejado"} />
      
      <input
        type="type"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      

      <h1>Notícias</h1>

      <sectio>
        {filterStories.map((stories) => {
          const { title, multimedia, subsection, short_url } = stories;

          return (
            <article key={title}>
              <div className="Body" style={{ color: "#888" }}>
                <h1>{title}</h1>
                <h3>{subsection}</h3>
                <a href={short_url}> Para mais informaçẽs </a>

                <div>
                  <img
                    style={{ width: "30%" }}
                    src={multimedia[0].url}
                    alt={title}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </sectio>
    </div>
  );
};

export default TopStories;

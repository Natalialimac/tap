import React , {useState, useEffect}from "react";
import axios from 'axios';
import Home from "./Home";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const fetchStories = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY_BOOK}`
                )
                setBooks(res.data.results.books)
        }

        fetchStories();
    }, [])

  return ( 
   <div>
    <Home />
    <h1>Livros</h1>
    
    <sectio>
        {books.map((stories) => {
            const {age_group,author,book_image, buy_links, description, price, primary_isbn10, publisher,rank,title} = stories;
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

            )
        })}
    </sectio>
   </div>
  );
}

export default Books;

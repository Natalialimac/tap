import React , {useState, useEffect}from "react";
import axios from 'axios';
import Home from "./Home";


const TopStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() =>{
        const fetchStories = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
                )
                setStories(res.data.results)
        }

        fetchStories();
    }, [])

  return ( 
   <div>
    <Home />
    <h1>Notícias</h1>

    <sectio>
        {stories.map((stories) => {
            const {title, multimedia, subsection,short_url} = stories;
            
            return (
                
                <article key={title}>
                    <div className="Body" style={{color:'#888'}}>
                        <h1>{title}</h1>
                        <h3>{subsection}</h3>
                        <a href={short_url}> Para mais informaçẽs </a>
                        
                        <div >
                        <img style={{width: '30%'}} src={multimedia[0].url} alt={title} />
                        </div>
                    </div>
                </article>

            )
        })}
    </sectio>
   </div>
  );
}

export default TopStories;

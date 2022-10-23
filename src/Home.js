import React , {useState, useEffect}from "react";
import { Outlet, Link } from "react-router-dom";


const Home = () => {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

export default Home;


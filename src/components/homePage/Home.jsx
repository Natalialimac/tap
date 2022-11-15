import React from "react";
import {  Link } from "react-router-dom";
import './style.css'

const Home = (props) => {
console.log(props)
  const Menu = () =>{
    return(
      <div class="fullscreen-menu">
         
         <input class="checkbox-toggle" type="checkbox" />
         <div class="hamburger">
           <span></span>
         </div>
       
         <nav class="menu">
       
           <div>
             <div>

               <ul>
                 <li> <Link to="/">Home</Link></li>
                 <li><Link to="/books">Books</Link></li>
                 <li> <Link to="/stories">Stories</Link></li>
                 <li><Link to ="/movies">Movies</Link></li>
               </ul>

             </div>
           </div>
       
         </nav>
       
       </div>
    )
  }
  return (
    <>
      <Menu />
      <div class="text">
       {props.text? props.text : "Site disponibilizado para informações baseada na base de dados do New york times "}
      </div>
      </>

  );
};

export default Home;

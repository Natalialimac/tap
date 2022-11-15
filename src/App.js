import Books from "./components/booksPage/Books";
import TopStories from "./components/topStoriesPage/TopStories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/Home"
import Movies from "./components/moviesPage/Movies";

function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/stories" element={<TopStories />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

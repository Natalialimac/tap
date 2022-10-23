import Books from './Books';
import TopStories from './TopStories';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';


function App() {
  return (
  <div  style={{textAlign:'center'}}>   
    <BrowserRouter>
     <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/stories" element={<TopStories />} />
        </Route>
      </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;




import './App.css';
import { BrowserRouter, Route , Routes , Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Posts from './Posts'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/posts/1">Posts id 1</Link></li>
          <li><Link to="/posts?fname=Phakin&lname=Saekhow">Posts Greet</Link></li>        
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

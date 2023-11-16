import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import CustomLink from "./components/CustomLink";

function App() {
  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar author='TRISTAN ANDERSON'>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/portfolio'>Portfolio</CustomLink>
          <CustomLink to='/news'>News</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
        </Navbar>
      </div>
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

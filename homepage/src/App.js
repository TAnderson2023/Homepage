import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar></Navbar>
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

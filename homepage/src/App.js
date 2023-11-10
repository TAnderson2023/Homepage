import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <header className="Header">
        <div className= "Nav-Element">
          <button>
            Home
          </button>
          <button>
            News
          </button>
          <button>
            Portfolio
          </button>
          <button>
            About
          </button>
        </div>
        <div className="Nav-Element">
          TRISTAN ANDERSON
        </div>
      </header>
      <div className="Body">
        <div className="Sidebar">

        </div>
        <div className="Content">

        </div>
      </div>
      <footer className="Footer">

      </footer> */}

      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

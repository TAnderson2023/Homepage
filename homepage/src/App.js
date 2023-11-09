import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
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
      {/* Body div is temporary. to be replaced with different pages using routers */}
      <div className="Body">
        <div className="Sidebar">

        </div>
        <div className="Content">

        </div>
      </div>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;

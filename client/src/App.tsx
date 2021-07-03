import Main from './components/main/Main';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './hh-logo-symbol.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/"><div className="App-logo"><img src={logo} alt="logo"/></div></Link>
          <div className="App-search"><input placeholder="Search"></input></div>
        </header>
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;

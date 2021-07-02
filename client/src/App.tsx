import Main from './components/main/Main';
import logo from './hh-logo-symbol.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{padding: '10px'}}><img src={logo} className="App-logo" alt="logo" /></div>
        <div style={{display: 'flex', flexDirection: 'column', 'justifyContent': 'center'}}><div>search</div></div>
      </header>
      <Main></Main>
    </div>
  );
}

export default App;

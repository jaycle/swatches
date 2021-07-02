import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import RandomButton from '../randombutton/RandomButton';
import './Main.css';

interface Swatch {
  id: number;
  hue: number;
  saturation: number;
  value: number;
}

const colorRoutes = [
  { to: '/red', name: 'Red' },
  { to: '/orange', name: 'Orange' },
  { to: '/yellow', name: 'Yellow' },
  { to: '/green', name: 'Green' },
  { to: '/blue', name: 'Blue' },
  { to: '/purple', name: 'Purple' },
  { to: '/brown', name: 'Brown' },
  { to: '/gray', name: 'Gray' },
]

function Main() {
  const [data, setData] = useState<Swatch[]>([]);
  useEffect(() => {
    fetch("/api/colors")
      .then(r => r.json())
      .then(colors => {
        console.log(colors);
        setData(colors);
      });
  }, []);

  const links = colorRoutes.map(r => <li><NavLink to={r.to}>{r.name}</NavLink></li>)
  return (
    <Router>
      <div className="Main">
        <nav>
          <RandomButton choices={data.map(d => d.id)}></RandomButton>
          <ul className="List">
            {links}
          </ul>
        </nav>
        <section>
          <span>Content will go here</span>
        </section>
      </div>
    </Router>
  );
}

export default Main;

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Swatch } from '../../data/swatch';
import Detail from '../detail/Detail';
import List from '../list/List';
import RandomButton from '../randombutton/RandomButton';
import './Main.css';

const colorRoutes = [
  { to: '/colors/red', name: 'Red' },
  { to: '/colors/orange', name: 'Orange' },
  { to: '/colors/yellow', name: 'Yellow' },
  { to: '/colors/green', name: 'Green' },
  { to: '/colors/blue', name: 'Blue' },
  { to: '/colors/purple', name: 'Purple' },
  { to: '/colors/brown', name: 'Brown' },
  { to: '/colors/gray', name: 'Gray' },
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
          <Route
            exact
            path="/swatches/:id"
            render={routeProps => (<Detail swatch={data[Number.parseInt(routeProps.match.params.id)]}/>)}>
          </Route>
          <Route
            path="/colors/:color"
            render={routeProps => (<List swatches={data} filter={routeProps.match.params.color}/>)}>
          </Route>
        </section>
      </div>
    </Router>
  );
}

export default Main;

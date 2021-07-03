import { useEffect, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { SwatchModel } from '../../data/swatch';
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
  const [data, setData] = useState<{[key:string]: SwatchModel}>({});
  useEffect(() => {
    fetch("/api/colors")
      .then(r => r.json())
      .then((colors: SwatchModel[]) => {
        const byId = colors.reduce((acc, c) => {
          acc[c.id.toString()] = c;
          return acc;
        }, {} as {[key: string]: SwatchModel});
        setData(byId);
      });
  }, []);

  const links = colorRoutes.map(r => <li key={r.name}><NavLink to={r.to}>{r.name}</NavLink></li>)
  return (
    <>
      <div className="Main">
        <nav>
          <RandomButton choices={Object.keys(data)}></RandomButton>
          <ul className="List">
            {links}
          </ul>
        </nav>
        <section>
          <Route
            path="/swatches/:id"
            render={routeProps => <Detail swatch={data[Number.parseInt(routeProps.match.params.id)]}/>}>
          </Route>
          <Route
            path="/colors/:color"
            render={routeProps => (<List swatches={Object.values(data)} filter={routeProps.match.params.color}/>)}>
          </Route>
          <Route
            exact
            path="/"
            render={_ => (<List swatches={Object.values(data)}/>)}>
          </Route>
        </section>
      </div>
    </>
  );
}

export default Main;

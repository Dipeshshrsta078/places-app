import { Link } from "react-router-dom";
import {useContext} from 'react';

import classes from "./MainNavigation.module.css";
import FavoritesContext from '../../Store/favorites-context';

const MainNavigation = () => {
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          Splendours
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Splendours</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites<span className={classes.badge}>{FavoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

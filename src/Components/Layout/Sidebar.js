import React from 'react';
import {useContext} from 'react';
import { Link } from "react-router-dom";

import classes from './Sidebar.module.css'
import FavoritesContext from '../../Store/favorites-context';


const Sidebar = () => {
    const FavoritesCtx = useContext(FavoritesContext);
    return (
        <div className={classes.sidebar}>
            <ul className={classes.list}>
          <li className={classes.item}>
            <Link to="/">All Splendours</Link>
          </li>
          <li className={classes.item}>
            <Link to="/new-meetup">Add New</Link>
          </li>
          <li className={classes.item}>
            <Link to="/favorites">Favorites<span className={classes.badge}>{FavoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
        </div>
    )
}

export default Sidebar;

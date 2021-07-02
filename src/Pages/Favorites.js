import React from 'react';
import {useContext} from 'react';
import FavoritesContext from '../Store/favorites-context';
import MeetupList from '../Components/Meetups/MeetupList';
import { Link } from "react-router-dom";
import classes from './Favorites.module.css';


const Favorites = () => {
    const FavoritesCtx = useContext(FavoritesContext);
    let content;
    if(FavoritesCtx.totalFavorites=== 0) {
        content=<div>
            <p>You currently have no Favorites. Start adding </p> <Link to="/">some?</Link> 
            </div>
    } else {
        content= <MeetupList meetups ={FavoritesCtx.favorites} />
    }

    return (
        <section className={classes.favorites}>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites;

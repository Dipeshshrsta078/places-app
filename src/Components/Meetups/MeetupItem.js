import React from "react";

import { useContext } from "react";
import FavoritesContext from "../../Store/favorites-context";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const FavoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);

  const handleToggleFavoriteStatus = () => {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavoriteStatus}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to favorites"}{" "}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;

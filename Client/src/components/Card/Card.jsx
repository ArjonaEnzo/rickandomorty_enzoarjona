import React, { useState,useEffect } from "react";
import styled from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";

function Card({
  id,
  name,
  onClose,
  image,
  status,
  species,
  gender,
  origin,
  removeFav,
  addFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image, status, species, gender, origin });
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const close = () => {
    onClose(id);
  };
  return (
    <div className={styled.conteins}>
      <div className={styled.botton}>
        <button className={styled.bt} onClick={close}>
          X
        </button>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{status}</h3>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <h3>{origin}</h3>
      {isFav ? (
        <button onClick={() => handleFavorite(isFav)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(isFav)}>🤍</button>
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

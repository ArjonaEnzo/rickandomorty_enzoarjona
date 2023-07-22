import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert("Error"));
    return setCharacter({});
  }, [id]);
  return (
    <>
      <h1>{character.name}</h1>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h4>{character.gender}</h4>
      <img src={character.image} alt="" />
    </>
  );
};
export default Detail;

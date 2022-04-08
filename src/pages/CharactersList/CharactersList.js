import React from "react";
import {useCharacters} from '../../hooks/useCharacters'
import './CharactersList.css'
import {Link} from 'react-router-dom'

function CharactersList(props) {
  const { error, loading, data } = useCharacters();
  if (loading) return <di>Loading.....!!!</di>;
  if (error) return <di>Some thing went wrong :)</di>;
  return (
    <div className="characterlist">
      {data.characters.results.map((ch) => {
        return (
          <Link to={`/${ch.id}`}>
            <img src={ch.image}/>
            <h2>{ch.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;

import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../../hooks/useCharacter";
import "./Character.css";
function Character(props) {
  const {id} = useParams()
  const { data, error, loading } = useCharacter(id);
  if (loading) return <di>Loading.....!!!</di>;
  if (error) return <di>Some thing went wrong :)</di>;
  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h>{data.character.name}</h>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((che) => {
            return (
              <div>
                {che.name} - <b>{che.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;

import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
function Search(props) {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <di>Loading.....!!!</di>}
      {error && <di>Some thing went wrong :)</di>}
      {
          data && (
              <ul>
                  {data.characters.results.map((character)=>{
                      return <li>{character.location.name}</li>
                  })}
              </ul>
          )
      }
    </div>
  );
}

export default Search;

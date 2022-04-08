import { gql, useMutation } from "@apollo/client";
import React from "react";

const CREATE_CHARACTER = gql`
    mutation CreateCharachter($name: String!, location: String!){
        createCharacter{
            record:{
                name: $name
                location: $location
            }
        }
    }
`;

function CreateCharacter(props) {
  const [createCharacter, { data, error, loading, called }] = useMutation(
    CREATE_CHARACTER,
    {
      variables: {
        name: "test",
        location: "somewhere",
      },
    }
  );

  return (
    <div>
      <button onClick={createCharacter}></button>
    </div>
  );
}

export default CreateCharacter;

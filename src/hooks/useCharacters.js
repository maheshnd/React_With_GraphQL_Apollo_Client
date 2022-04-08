import { useQuery, gql } from "@apollo/client";
const GET_CHARACTES = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export const useCharacters = () =>{
    const { error, loading, data } = useQuery(GET_CHARACTES);
    return{
        error,
        data,
        loading
    }
}
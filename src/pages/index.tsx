import { Container } from "@chakra-ui/react";
import PokemonCard from "../components/PokemonCard";
import { useQuery } from "react-query";
import axios from "axios";

const Index = () => {
  const { data } = useQuery(
    "pokemon",
    async () =>
      await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16`)
  );

  return (
    <>
      <Container maxW="container.lg" centerContent>
        <PokemonCard response={data?.data} />
      </Container>
    </>
  );
};

export default Index;

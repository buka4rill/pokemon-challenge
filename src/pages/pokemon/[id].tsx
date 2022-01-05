import React from "react";
import { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
import PokemonDetails from "../../components/PokemonDetails";
import { useQuery } from "react-query";
import axios from "axios";

interface DetailsProps {}

const Details: React.FC<DetailsProps> = ({}) => {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useQuery("info", async () => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  });

  return (
    <Container maxW="container.xl" centerContent>
      <PokemonDetails
        id={Number(id)}
        name={data?.data.name}
        species={data?.data.species.name}
        stats={data?.data.stats}
        types={data?.data.types}
        weight={data?.data.weight}
        moves={data?.data.moves}
      />
    </Container>
  );
};

export default Details;

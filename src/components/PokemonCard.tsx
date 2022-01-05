import { SimpleGrid, Box, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

type Result = {
  name: string;
  url: string;
};

export type PokemonData = {
  count: number;
  next: string;
  previous: string;
  results: Result[];
};

interface PokemonCardProps {
  response: PokemonData;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ response }) => {
  const getDescription = async () => {
    let data = [];
    for (let i = 0; i < 30; i++) {
      let id = i + 1;

      let res = await axios.get(
        `https://pokeapi.co/api/v2/characteristic/${id}/`
      );

      data.push(res);
    }

    return data;
  };

  const { data } = useQuery("details", getDescription);

  const renderDescription = (idx: any) => {
    if (data === undefined) {
      return <>No description found</>;
    } else {
      return <div>{data[idx]?.data?.descriptions[7].description}</div>;
    }
  };

  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {response?.results?.map((pokemon, index) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            key={index.toString()}
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                pokemon.url.split("/")[6]
              }.png`}
              alt="image"
            />

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {pokemon.name}
              </Box>

              {/* {data === undefined ? (<Box>No description found</Box>) ? (<Box>data</Box>)} */}

              <Box>{renderDescription(index)}</Box>

              <Box display="flex" mt="2" alignItems="center">
                <Link href={`/pokemon/${pokemon.url.split("/")[6]}`}>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    size="md"
                    width="100%"
                  >
                    See details
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokemonCard;

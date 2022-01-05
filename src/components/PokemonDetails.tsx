import {
  Box,
  Divider,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type TypeProp = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Moves = {
  move: {
    name: string;
    url: string;
  };
};

interface PokemonDetailsProps {
  id: number;
  name: string;
  species: string;
  stats: Array<Stats>;
  types: Array<TypeProp>;
  weight: number;
  moves: Array<Moves>;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  id,
  name,
  species,
  stats,
  types,
  weight,
  moves,
}) => {
  return (
    <>
      <Box
        maxW="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        shadow="md"
      >
        <Flex>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt="image"
            width="50%"
          />

          <Box p="6" width="50%">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h3"
              lineHeight="tight"
              isTruncated
            >
              Name: {name}
            </Box>

            <Divider />

            <h4>Species: {species}</h4>

            <Divider />

            <h4>
              Stats: <br />
              <UnorderedList>
                {stats &&
                  stats.map((stat) => <ListItem>{stat.base_stat}</ListItem>)}
              </UnorderedList>
            </h4>

            <Divider />

            <h4>
              Types: <br />
              <UnorderedList>
                {types &&
                  types.map((type) => <ListItem>{type.type.name}</ListItem>)}
              </UnorderedList>
            </h4>

            <Divider />

            <p>Weight: {weight}</p>

            <Divider />

            <p>
              <b>Moves:</b> <br />
              <UnorderedList>
                {moves &&
                  moves.map((move) => <ListItem>{move.move.name}</ListItem>)}
              </UnorderedList>
            </p>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PokemonDetails;

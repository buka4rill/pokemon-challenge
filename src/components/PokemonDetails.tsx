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
        {/* <Flex> */}
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt="image"
          // width="50%"
        />

        <Box p="6">
          <h4
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {name}
          </h4>

          <Divider />

          <h4>
            <b>Species:</b> {species}
          </h4>

          <Divider />

          <h4>
            <b>Stats:</b> <br />
            <UnorderedList>
              {stats &&
                stats.map((stat) => <ListItem>{stat.base_stat}</ListItem>)}
            </UnorderedList>
          </h4>

          <Divider />

          <h4>
            <b>Types:</b> <br />
            <UnorderedList>
              {types &&
                types.map((type) => <ListItem>{type.type.name}</ListItem>)}
            </UnorderedList>
          </h4>

          <Divider />

          <p>
            <b>Weight:</b> {weight}
          </p>

          <Divider />

          <p>
            <b>Moves:</b> <br />
            <UnorderedList>
              {moves &&
                moves.map((move) => <ListItem>{move.move.name}</ListItem>)}
            </UnorderedList>
          </p>
        </Box>
        {/* </Flex> */}
      </Box>
    </>
  );
};

export default PokemonDetails;

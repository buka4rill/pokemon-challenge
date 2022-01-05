import { SimpleGrid, Box, Button, Image } from "@chakra-ui/react";
import React from "react";

interface PokemonCardProps {}

const PokemonCard: React.FC<PokemonCardProps> = ({}) => {
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          shadow="md"
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
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
              titlte
            </Box>

            <Box>some short description about the pokemon</Box>

            <Box display="flex" mt="2" alignItems="center">
              <Button
                colorScheme="teal"
                variant="outline"
                size="md"
                width="100%"
              >
                Button
              </Button>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default PokemonCard;

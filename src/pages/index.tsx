import { Container } from "@chakra-ui/react";
import PokemonCard from "../components/PokemonCard";

const Index = () => {
  return (
    <>
      <Container maxW="container.lg" centerContent>
        <PokemonCard />
      </Container>
    </>
  );
};

export default Index;

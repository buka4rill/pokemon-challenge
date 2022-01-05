import { Container } from "@chakra-ui/react";
import PokemonCard, { PokemonData } from "../components/PokemonCard";
import { useQuery } from "react-query";
import axios from "axios";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { ChangeEvent, useState, useEffect } from "react";

const Index = () => {
  // const router = useRouter();

  const [pokemonsTotal, setPokemonsTotal] = useState<number | undefined>(12);

  const [pokemons, setPokemons] = useState<PokemonData>();

  // Pagination hook
  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  } = usePagination({
    // total: pokemonsTotal,
    pagesCount: 12,
    initialState: { currentPage: 1, pageSize: 16 },
  });

  // Api call
  const fetchPokemon = async (
    pageSize: number,
    offset: number
  ): Promise<any> => {
    return await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${pageSize}`
    ).then(async (res) => await res.json());
  };

  useEffect(() => {
    fetchPokemon(pageSize, offset)
      .then((pokemons) => {
        setPokemonsTotal(pokemons.count);
        setPokemons(pokemons);
      })
      .catch((error) => console.log("pokemon error: ", error));
  }, [currentPage, pageSize, offset]);

  const handlePagination = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  return (
    <>
      <Container maxW="container.lg" centerContent>
        <PokemonCard response={pokemons} />

        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePagination}
        >
          <PaginationContainer w="full" marginTop={10}>
            <PaginationPrevious bg="blue.500" w="20rem">
              Previous
            </PaginationPrevious>
            <PaginationPageGroup w="full" justifyContent={"center"}>
              {pages.map((page: number) => (
                <PaginationPage
                  key={`pagination_page_${page}`}
                  page={page}
                  w={7}
                  bg="red.300"
                  fontSize="sm"
                  _hover={{
                    bg: "green.300",
                  }}
                  _current={{
                    w: 7,
                    bg: "green.300",
                    fontSize: "sm",
                    _hover: {
                      bg: "blue.300",
                    },
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext w={7} bg="red.300" fontSize="sm">
              Next
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Container>
    </>
  );
};

export default Index;

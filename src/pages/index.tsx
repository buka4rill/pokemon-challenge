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

  // const { data } = useQuery(
  //   ["pokemon", pageSize],
  //   async () =>
  //     await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pageSize}`
  //     ),
  //   {
  //     keepPreviousData: true,
  //   }
  // );

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
    // router.push(`pagination/?page=${nextPage}`, undefined, { shallow: true });

    // console.log("next page: ", nextPage);
    // console.log("page size: ", pageSize);
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  console.log(pokemons);
  return (
    <>
      <Container maxW="container.lg" centerContent>
        <PokemonCard response={pokemons} />

        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePagination}
        >
          <PaginationContainer bg="blue.500" w="full">
            <PaginationPrevious bg="blue.500" w="20rem">
              Previous
            </PaginationPrevious>
            <PaginationPageGroup bg="blue.500" w="full">
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

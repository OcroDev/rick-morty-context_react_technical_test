import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharactersContext = createContext();
export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResult] = useState(0);
  const [pages, setPages] = useState(0);
  const [actualPage, setactualPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      if (response.status === 200) {
        const { results, info } = response.data;
        setCharacters(results);
        setTotalResult(info.count);
        setPages(info.pages);
        setPrevPage(info.prev);
        setNextPage(info.next);
      }
    });
  }, []);

  const goToPage = (page, e) => {
    const type = e.target.dataset.type;

    switch (type) {
      case "prev":
        setactualPage(actualPage - 1);
        break;
      case "next":
        setactualPage(actualPage + 1);
        break;
      case "goTo":
        const pageNumber = Number(e.target.value);
        page = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
        setactualPage(pageNumber);
        break;
      default:
        break;
    }

    axios.get(page).then((response) => {
      if (response.status === 200) {
        const { results, info } = response.data;
        setCharacters(results);
        setPrevPage(info.prev);
        setNextPage(info.next);
      }
    });
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        pages,
        actualPage,
        prevPage,
        nextPage,
        goToPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

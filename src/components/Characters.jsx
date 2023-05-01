import React from "react";

// Deps
import { useContext } from "react";

//Context
import { CharactersContext } from "../context/charactersContext";

//Components
import { Pagination } from "./Pagination";

export const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div className="row">
      <Pagination />
      {characters.map((character, index) => {
        return (
          <div
            className=" col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12"
            key={index}
          >
            <div className="card mt-4">
              <img src={character.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Card Name: </b>
                  {character.name} - {index}
                </h5>
                <p className="card-text">
                  <b>Status: </b>
                  {character.status} <br />
                  <b>Species:</b> {character.species}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

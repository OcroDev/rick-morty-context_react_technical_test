import React from "react";

import { useContext } from "react";

import { CharactersContext } from "../context/charactersContext";

export const Pagination = () => {
  const { totalResults, pages, actualPage, prevPage, nextPage, goToPage } =
    useContext(CharactersContext);

  return (
    <>
      <div className="col-3 d-flex align-items-center">
        <p>
          <b>Total Result: </b> {totalResults}
        </p>
      </div>

      <div className="col-3 d-flex align-items-center">
        <p>
          <b>
            Page {actualPage} of {pages}
          </b>
        </p>
      </div>
      <div className="col-3 d-flex align-items-center">
        <p>
          <b>Go to page</b>
        </p>
        <select
          name="goTo"
          id=""
          className="form-select w-auto mx-1"
          value={actualPage}
          data-type={"goTo"}
          onChange={(e) => goToPage("", e)}
        >
          {Array.from(Array(pages).keys()).map((page, index) => {
            return (
              <option key={index} value={page + 1}>
                {page + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-3 text-end">
        {prevPage && (
          <button
            className="btn btn-info mx-2"
            data-type="prev"
            onClick={(e) => goToPage(prevPage, e)}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="btn btn-info mx-2"
            data-type="next"
            onClick={(e) => goToPage(nextPage, e)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

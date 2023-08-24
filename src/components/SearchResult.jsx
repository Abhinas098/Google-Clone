import React from "react";

const SearchResult = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="searchPage__result">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="searchPage__resultTitle"
          href={item.link}
        >
          <h2>{item.title}</h2>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={item.link}>
          {item.pagemap?.cse_image?.length > 0 &&
            item.pagemap?.cse_image[0]?.src && (
              <img
                src={
                  item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src
                }
                alt=""
                className="searchPage__img"
              />
            )}
          {item.displayLink}
        </a>
        <p className="searchPage__resultSnippet">{item.snippet}</p>
      </div>
    </>
  );
};

export default SearchResult;

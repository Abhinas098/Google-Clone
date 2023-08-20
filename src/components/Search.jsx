import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import "./Search.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useReducerVal } from "../store/StateProvider";

const Search = () => {
  const [{}, dispatch] = useReducerVal();

  const [input, setInput] = useState("");
  const history = useHistory();

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch({
      type: "SET_SEARCH_VAL",
      val: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={searchHandler} className="search__inputIco" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button type="submit" onClick={searchHandler} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default Search;

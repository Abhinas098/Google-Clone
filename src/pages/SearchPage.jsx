import "./SearchPage.css";
import { useReducerVal } from "../store/StateProvider";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import useSearch from "../hook/useSearch";
import { useState } from "react";

const SearchPage = () => {
  const [counter, setCounter] = useState(1);

  const [{ val }] = useReducerVal();

  const { data } = useSearch(val, counter);
  console.log(data);

  const counterHandler = () => {
    setCounter(counter + 10);
  };
  const counter1 = () => {
    setCounter(1);
  };
  const counter2 = () => {
    setCounter(11);
  };
  const counter3 = () => {
    setCounter(21);
  };

  console.log(counter);

  return (
    <div className="searchPage">
      <div className="searchHeader">
        <Link to="/">
          <img
            src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="Logo"
          />
        </Link>
        <div className="searchBar">
          <Search hide placeholder />
          <br />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocationOnSharpIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertSharpIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data !== null && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime}seconds) of {val}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <Link className="searchPage__resultTitle" to={item.link}>
                <h2>{item.title}</h2>
              </Link>
              <Link to={item.link}>
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
              </Link>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      <div className="classCenter">
        {" "}
        <p onClick={counter1}>1</p>
        <p onClick={counter2}>2 </p> <p onClick={counter3}> 3 </p>{" "}
        <p onClick={counterHandler}> next</p>
      </div>
    </div>
  );
};

export default SearchPage;

import "./SearchPage.css";
import { useReducerVal } from "../store/StateProvider";
import { Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import useSearch from "../hook/useSearch";
import { useEffect, useState } from "react";

import SearchResult from "../components/SearchResult";
import ImageResult from "../components/ImageResult";

const SearchPage = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

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
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocationOnSharpIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps"
                >
                  Map
                </a>
              </div>
              <div className="searchPage__option">
                <MoreVertSharpIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <DescriptionIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/search?q=news"
                >
                  News
                </a>
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
      <></>

      {data !== null && (
        <>
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data.searchInformation.formattedTotalResults} results in (
              {data?.searchInformation.formattedSearchTime}seconds) of {val}
            </p>
            {data?.items.map((item,index) => (
              <>
                {currentPath === "/search" && (
                  <SearchResult item={item}/>
                )}
                {currentPath === "/images" && <ImageResult item={item} />}
              </>
            ))}
            <div className="classCenter">
              {" "}
              <p onClick={counter1}>1</p>
              <p onClick={counter2}>2 </p> <p onClick={counter3}> 3 </p>{" "}
              <p onClick={counterHandler}> next</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;

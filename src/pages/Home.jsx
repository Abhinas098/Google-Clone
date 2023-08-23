import React from "react";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="Home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/">About</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.in">Store</a>
        </div>

        <div className="home__headerRight">
          <a target="_blank" rel="noopener noreferrer" href="https://www.gmail.com">Gmail</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/images">Images</a>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <br />
      <br />
      <div className="home__body">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
        <div className="home__input">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;

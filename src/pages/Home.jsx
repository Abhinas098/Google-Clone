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
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
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

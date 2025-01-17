import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      {/* <Link to="/"> */}
      {/* <Logo /> */}
      {/* </Link> */}
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <FeedbackButton>Give Feedback</FeedbackButton>
    </nav>
  );
}

export default Navbar;

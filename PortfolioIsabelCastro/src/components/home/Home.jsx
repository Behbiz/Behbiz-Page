import React from "react";
import { img } from "../../assets";
import styles from "./home.module.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img src={img.homeBg} alt="home" />

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(3000).deleteAll().start();
          }}
          options={{
            strings: ["Web Developer", "Front-end", "Back-end", "Full-Stack", "UI Designer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default Home;

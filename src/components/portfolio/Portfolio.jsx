import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.css";
import { t } from "i18next";

import { motion } from "framer-motion";
import FilterBtn from "./FilterBtn";

import PortfolioItem from "./PortfolioItem";
import axios from "axios";

const Portfolio = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/portfolio/data`,
      withCredentials: false,
    })
      .then((response) => {
        setWorks(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-50%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={`portfolio ${styles.portfolio}`}
    >
      <div>
        <h1>{t("portfolios")}</h1>

        <div>
          <FilterBtn
            works={works}
            setFilterWork={setFilterWork}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <PortfolioItem filterWork={filterWork} />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;

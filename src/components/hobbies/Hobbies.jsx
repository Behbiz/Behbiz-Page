import React from 'react';
import { t } from "i18next";
import { img } from "../../assets";
import styles from "./hobbies.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';



function Hobbies() {
  return (
    <div className={`hobbies ${styles.hobbies}`}>
    <div className="d-flex flex-row mx-auto">

    <div className="card m-3">
      <img src={img.skydive} alt="aboutme"  className="" />
        <div className="card-body">
          <p className="card-text">{t("hobbie1")}</p>
        </div>
      </div>
      
      <div className="card m-3">
      <img src={img.senderismo} alt="aboutme"  className="card-img-top" />
        <div className="card-body">
          
          <p className="card-text">{t("hobbie2")}</p>
        </div>
      </div>

      <div className="card m-3">
      <img src={img.scuba} alt="aboutme"  className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{t("hobbie3")}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hobbies;
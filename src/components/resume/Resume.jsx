import React from "react";
import { t } from "i18next";
import { img } from "../../assets";

import styles from "./Resume.module.css";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={styles.portfolio}
    >
      <div className={`resume ${styles.resume}`}>
        <h1>{t("resumeTwo")}</h1>

        <div className={styles.secs}>
          <section className={`education ${styles.education}`}>
            <article className="title">
              <h4>{t("education")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("educationYearSeven")}</span>
                <strong>{t("educationTitleSeven")}</strong>
                <p>{t("educationTextSeven")}</p>
              </li>

              <li>
                <span>{t("educationYearSix")}</span>
                <strong>{t("educationTitleSix")}</strong>
                <p>{t("educationTextSix")}</p>
              </li>

              <li>
                <span>{t("educationYearFive")}</span>
                <strong>{t("educationTitleFive")}</strong>
                <p>{t("educationTextFive")}</p>
              </li>

              <li>
                <span>{t("educationYearFour")}</span>
                <strong>{t("educationTitleFour")}</strong>
                <p>{t("educationTextFour")}</p>
              </li>

              <li>
                <span>{t("educationYearThree")}</span>
                <strong>{t("educationTitleThree")}</strong>
                <p>{t("educationTextThree")}</p>
              </li>
            </ul>

            <ul>
              <li>
                <span>{t("educationYearTwo")}</span>
                <strong>{t("educationTitleTwo")}</strong>
                <p>{t("educationTextTwo")}</p>
              </li>

              <li>
                <span>{t("educationYearOne")}</span>
                <strong>{t("educationTitleOne")}</strong>
                <p>{t("educationTextOne")}</p>
              </li>


              <li>
                <span>{t("educationYear")}</span>
                <strong>{t("educationTitle")}</strong>
                <p>{t("educationText")}</p>
              </li>

            </ul>
            
          </section>

          <section className={`languages ${styles.languages}`}>
            <article className="title">
              <h4>{t("experience")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>
            
            <ul>
              <li>
                <span>{t("experienceYear")}</span>
                <strong>{t("experienceTitle")}</strong>
                <p>{t("experienceText")}</p>
              </li>
              <li>
                <span>{t("experienceYearOne")}</span>
                <strong>{t("experienceTitleOne")}</strong>
                <p>{t("experienceTextOne")}</p>
              </li>
              <li>
                <span>{t("experienceYearTwo")}</span>
                <strong>{t("experienceTitleTwo")}</strong>
                <p>{t("experienceTextTwo")}</p>
              </li>
              <li>
                <span>{t("experienceYearThree")}</span>
                <strong>{t("experienceTitleThree")}</strong>
                <p>{t("experienceTextThree")}</p>
              </li>

            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;

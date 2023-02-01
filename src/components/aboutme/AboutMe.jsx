import { t } from "i18next";
import { img } from "../../assets";
import styles from "./AboutMe.module.css";
import Hobbies from "../hobbies/Hobbies";
import { motion } from "framer-motion";


const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
      <section className={`aboutme ${styles.aboutme}`}>
        <img src={img.aboutme} alt="aboutme" />
        <p className="about-text">{t("aboutmeTwo")}</p>
        <article className="title">
              <h4>{t("myHobbies")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>
               
        <Hobbies/>
     
      
        <div className={styles.sl}>
          <section className={styles.skills}>
            <article className="title">
              <h4>{t("mySkills")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>Git</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>HTML</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>CSS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>Responsive</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>Figma</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>


            <div>
              <span>SASS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Bootstrap</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Tailwind</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Python</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>JavaScript</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>React</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>Node.Js</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>


            <div>
              <span>Vue</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>TypeScript</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
           
            <div>
              <span>PHP</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            
            <div>
              <span>Laravel</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>MySQL</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
          </section>

          <section className={styles.languages}>
            <article className="title">
              <h4>{t("languages")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <div>
              <span>{t("Portugués")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>{t("spanish")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            
            <div>
              <span>{t("english")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;

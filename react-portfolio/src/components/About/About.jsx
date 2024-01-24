import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export default function About() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>{`I'm a frontend developer with experience in build and optimize sites`}</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>{`I have experience developing fast and optimised and APIs`}</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>{`I have designed multiple landing page and have systems as well`}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
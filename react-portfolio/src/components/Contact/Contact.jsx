import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                    <a href="">myemail@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                    <a href="">myemail@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                    <a href="">myemail@gmail.com</a>
                </li>
            </ul>
        </footer>
    )
}
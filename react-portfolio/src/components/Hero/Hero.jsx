import {getImageUrl} from '../../utils'
import styles from './Hero.module.css'

export default function Hero() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{`Hi, I'm Shin`}</h1>
                <p className={styles.description}>{`I'm a full stack developer with 5 years of experence with React JS and Node JS`}</p>
                <a className={styles.contactBtn} href="">Contact me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="" />
            <div className={styles.topBlur}>

            </div>
            <div className={styles.bottomBlur}>

            </div>
        </section>
    )
}
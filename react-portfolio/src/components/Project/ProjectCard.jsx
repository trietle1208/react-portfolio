import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project: {title, imageSrc, description, skills, demo, source} }) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={getImageUrl(imageSrc)} alt="" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <li className={styles.skill} key={id}>{skill}</li>
                    })
                }
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    );
}
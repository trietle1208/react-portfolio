import skills from '../../data/skill.json';
import history from '../../data/history.json';
import {getImageUrl} from '../../utils'
import styles from './Experience.module.css'

export default function Experience() {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return <div key={id} className={styles.skill}> 
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt="" />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((item, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(item.imageSrc)} alt="" />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${item.role}, ${item.organisation}`}</h3>
                                    <h3>{`${item.startDate} - ${item.endDate}`}</h3>
                                    <ul>
                                        {
                                            item.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
} 
import styles from './skillsec.module.scss';
import { SkillList } from '../../molecules/skilllist/SkillList';

export const Skillsec = () => {

    return (
        <div className={styles.skillsec}>
            <SkillList />
        </div>
    )
}

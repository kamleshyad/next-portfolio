import { Companysec } from '../../molecules/company/Companysec';
import styles from './experiencesec.module.scss';

export const Experiencesec = () => {
    return (
        <div className={styles.experiencewrap}>
            <div className={styles.yearsec}>
                <div className={styles.yearwrap}>
                    <h3>3.6 <span>Years</span></h3>
                </div>
                <div className={styles.profilesec}>
                    <p>of working experience as a <span>"Frontend Developer"</span></p>
                </div>
            </div>
            <Companysec />
        </div>
    )
}

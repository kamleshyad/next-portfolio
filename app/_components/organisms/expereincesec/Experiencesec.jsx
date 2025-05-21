import styles from './experiencesec.module.scss';

import { Sectiontitle } from "../../molecules/sectiontitle/Sectiontitle";

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
        </div>
    )
}

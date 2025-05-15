import styles from './experiencesec.module.scss';

import { Sectiontitle } from "../sectiontitle/Sectiontitle";

export const Experiencesec = () => {
    return (
        <>
            <Sectiontitle title="Experience" id="experience"/>
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
        </>
    )
}

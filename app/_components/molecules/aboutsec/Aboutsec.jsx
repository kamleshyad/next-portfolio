import { Sectiontitle } from '../sectiontitle/Sectiontitle';
import styles from './page.module.scss';

export const Aboutsec = () => {
    return (
        <>
            <Sectiontitle title="About Me" id="about-me"/>
            <article className={styles.aboutwrap}>
                <div className={styles.yearsec}>
                    <div className={styles.yearwrap}>
                        <h3>3.6 <span>Years</span></h3>
                    </div>
                    <div className={styles.profilesec}>
                        <p>of working experience as a <span>"Frontend Developer"</span></p>
                    </div>
                </div>
                <div className={styles.aboutrightsec}>
                    <h4>More about me</h4>
                    <p>Front-end developer with 3.6 of experience in creating dynamic, responsive, and user-focused web applications using HTML5, CSS3, JavaScript, Wordpress, React and Next.js. Skilled in integrating APIs, optimizing for SEO, and enhancing performance to improve user engagement. Dedicated to delivering clean, scalable code and staying updated with the latest industry trends.</p>
                </div>
            </article>
        </>
    )
}

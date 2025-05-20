import { PrimaryLink } from '../../../atoms/buttons/Button';
import { Sectiontitle } from '../../../molecules/sectiontitle/Sectiontitle';
import styles from './page.module.scss';

export const Aboutsec = () => {
    return (
        <article className={styles.aboutwrap}>
            <div className={styles.aboutlefttsec}>
                <ul className="reset">
                    <li>
                        <p className={styles.title}>Name</p>
                        <p>Kamlesh S. Yadav</p>
                    </li>
                    <li>
                        <p className={styles.title}>Work Profile</p>
                        <p>Frontend Developer</p>
                    </li>
                    <li>
                        <p className={styles.title}>Birthday</p>
                        <p>February 19, 1995</p>
                    </li>
                    <li>
                        <p className={styles.title}>Phone</p>
                        <p>+91 9168737879</p>
                    </li>
                    <li>
                        <p className={styles.title}>Email</p>
                        <p>Kamleshyadav1795@gmail.com</p>
                    </li>
                    <li>
                        <p className={styles.title}>Location</p>
                        <p>Palghar, Maharashtra</p>
                    </li>
                    <li>
                        <p className={styles.title}>Language</p>
                        <p>English, Hindi, Marathi</p>
                    </li>
                </ul>
            </div>
            <div className={styles.aboutrightsec}>
                <h4>More about me</h4>
                <p>Front-end developer with 3.6 of experience in creating dynamic, responsive, and user-focused web applications using HTML5, CSS3, JavaScript, Wordpress, React and Next.js. Skilled in integrating APIs, optimizing for SEO, and enhancing performance to improve user engagement. Dedicated to delivering clean, scalable code and staying updated with the latest industry trends.</p>
                <PrimaryLink href="/files/Kamlesh-S-Yadav-Resume.pdf" aria-label="Link to downliad cv" download>Download CV</PrimaryLink>
            </div>
        </article>
    )
}

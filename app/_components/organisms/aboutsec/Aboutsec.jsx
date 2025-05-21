import { PrimaryLink } from '../../atoms/buttons/Button';
import styles from './page.module.scss';

export const Aboutsec = () => {

    const aboutItems = [
        { label: "Name", value: "Kamlesh S. Yadav" },
        { label: "Work Profile", value: "Frontend Developer" },
        { label: "Birthday", value: "February 19, 1995" },
        { label: "Phone", value: "+91 9168737879", type: "phone" },
        { label: "Email", value: "Kamleshyadav1795@gmail.com", type: "email" },
        { label: "Location", value: "Palghar, Maharashtra" },
        { label: "Languages", value: "English, Hindi, Marathi" },
    ]

    return (
        <article className={styles.aboutwrap}>
            <div className={styles.aboutlefttsec}>
                <ul className="reset">
                    {
                        aboutItems.map((about, index) => {
                            return(
                                <li key={index}>
                                    <p className={styles.title}>{about.label}</p>
                                    <p>{about.value}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.aboutrightsec}>
                <h3>More about me</h3>
                <p>Front-end developer with 3.6 of experience in creating dynamic, responsive, and user-focused web applications using HTML5, CSS3, JavaScript, Wordpress, React and Next.js. Skilled in integrating APIs, optimizing for SEO, and enhancing performance to improve user engagement. Dedicated to delivering clean, scalable code and staying updated with the latest industry trends.</p>
                <PrimaryLink href="/doc/Kamlesh-S-Yadav-Resume.pdf" aria-label="Download Kamlesh Yadav's resume as PDF" download>Download CV</PrimaryLink>
            </div>
        </article>
    )
}

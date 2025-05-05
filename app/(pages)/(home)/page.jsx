import styles from './page.module.scss';

import { Container } from "@/app/_components/organisms/container/Container";

const Home = () => {
    return(
        <section className={styles.aboutsec} aria-labelledby='about-title'>
            <Container container="lg-">
                <div className={styles.titlesec}>
                    <h2 id="about-title">About Me</h2>
                    <p>About Me</p>
                </div>
                <article className={styles.aboutbox}>
                    <h3>Hi There! I'm Kamlesh Yadav</h3>
                    <h4>Frontend Developer</h4>
                    <p>Front-end developer with 3.6 of experience in creating dynamic, responsive, and user-focused web applications using HTML5, CSS3, JavaScript, Wordpress, React and Next.js. Skilled in integrating APIs, optimizing for SEO, and enhancing performance to improve user engagement. Dedicated to delivering clean, scalable code and staying updated with the latest industry trends.</p>
                </article>
            </Container>
        </section>
    )
}

export default Home;
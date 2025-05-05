import styles from './page.module.scss';

import { Container } from "@/app/_components/organisms/container/Container";

const Home = () => {
    return(
        <section className={styles.aboutsec} aria-labelledby='about'>
            <Container container="lg-">
                <div className={styles.titlesec}>
                    <h2 id="about">About Me</h2>
                    <h3>About Me</h3>
                </div>
            </Container>
        </section>
    )
}

export default Home;
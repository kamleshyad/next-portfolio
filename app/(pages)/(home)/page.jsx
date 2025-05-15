import styles from './page.module.scss';

import { Container } from "@/app/_components/organisms/container/Container";
import { Aboutsec } from '@/app/_components/molecules/aboutsec/Aboutsec';
import { Experiencesec } from '@/app/_components/molecules/expereincesec/Experiencesec';

const Home = () => {
    return(
        <>
            <section className={styles.aboutsec} aria-labelledby='about-me'>
                <Container container="lg-">
                    <Aboutsec />
                </Container>
            </section>
            <section className={styles.experiencesec} aria-labelledby='experience'>
                <Container container="lg-">
                    <Experiencesec />
                </Container>
            </section>
        </>
        
    )
}

export default Home;
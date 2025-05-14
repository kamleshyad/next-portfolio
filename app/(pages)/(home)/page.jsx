import styles from './page.module.scss';

import { Container } from "@/app/_components/organisms/container/Container";
import { Sectionhead } from '@/app/_components/molecules/sectionhead/Sectionhead';
import { Aboutsec } from '@/app/_components/molecules/aboutsec/Aboutsec';

const Home = () => {
    return(
        <section className={styles.aboutsec} aria-labelledby='about-me'>
            <Container container="lg-">
                <Aboutsec />
            </Container>
        </section>
    )
}

export default Home;
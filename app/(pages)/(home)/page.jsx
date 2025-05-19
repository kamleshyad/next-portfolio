import styles from './page.module.scss';

import { Container } from "@/app/_components/organisms/container/Container";
import { Sectiontitle } from '@/app/_components/molecules/sectiontitle/Sectiontitle';
import { Aboutsec } from '@/app/_components/molecules/aboutsec/Aboutsec';
import { Experiencesec } from '@/app/_components/molecules/expereincesec/Experiencesec';
import { Skillsec } from '@/app/_components/molecules/skillsec/Skillsec';

const Home = () => {
    return(
        <>
            <section className={styles.aboutsec} aria-labelledby='about-me'>
                <Container container="lg-">
                    <Sectiontitle title="About Me" id="about-me"/>
                    <Aboutsec />
                </Container>
            </section>
            <section className={styles.experiencesec} aria-labelledby='experience'>
                <Container container="lg-">
                    <Sectiontitle title="Experience" id="experience"/>
                    <Experiencesec />
                </Container>
            </section>
            <section className={styles.experiencesec} aria-labelledby='skill'>
                <Container container="lg-">
                    <Sectiontitle title="Skills" id="skill"/>
                    <Skillsec />
                </Container>
            </section>
        </>
        
    )
}

export default Home;
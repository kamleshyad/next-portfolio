import styles from './page.module.scss';

import { MainTemplate } from '@/app/_components/template/MainTemplate';
import { Sectiontitle } from '@/app/_components/molecules/sectiontitle/Sectiontitle';
import { Accordian } from '@/app/_components/atoms/accordian/Accordian';
import { Aboutsec } from '@/app/_components/organisms/aboutsec/Aboutsec';
import { Experiencesec } from '@/app/_components/organisms/expereincesec/Experiencesec';
import { Skillsec } from '@/app/_components/organisms/skillsec/Skillsec';
import { Projectsec } from '@/app/_components/organisms/projectsec/Projectsec';

const Home = () => {
    return(
        <>
            <section className={styles.aboutsec} aria-labelledby='about-me'>
                <MainTemplate container="lg-">
                    <Sectiontitle title="About Me" id="about-me"/>
                    <Aboutsec />
                </MainTemplate>
            </section>
            <section className={styles.experiencesec} aria-labelledby='experience'>
                <MainTemplate container="lg-">
                    <Sectiontitle title="Experience" id="experience"/>
                    <Experiencesec />
                </MainTemplate>
            </section>
            <section className={styles.skillsec} aria-labelledby='skill'>
                <MainTemplate container="lg-">
                    <Sectiontitle title="Skills" id="skill"/>
                    <Skillsec />
                </MainTemplate>
            </section>
            {/* <section className={styles.projectsec} aria-labelledby='Project'>
                <MainTemplate container="lg-">
                    <Sectiontitle title="Projects" id="Project"/>
                    <Projectsec />
                </MainTemplate>
            </section> */}
            <section className={styles.hireme} aria-labelledby='hire-me'>
                <MainTemplate container="lg-">
                    <Sectiontitle title="Why Hire Me" id="hire-me"/>
                    <div className="hireaccordian">
                        <Accordian />
                    </div>
                </MainTemplate>
            </section>
        </>
        
    )
}

export default Home;
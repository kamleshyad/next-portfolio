import styles from './page.module.scss';

import { Container } from "@/app/_components/template/container/Container";
import { Aboutsec } from "@/app/_components/organisms/aboutsec/Aboutsec";

export default function About() {
    return (
        <section className={styles.aboutsec} aria-labelledby='about-me'>
            <Container container="lg-">
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
            </Container>
        </section>
    )
}
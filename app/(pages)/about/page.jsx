import styles from './page.module.scss';

import { MainTemplate } from '@/app/_components/template/MainTemplate';
import { Aboutsec } from "@/app/_components/organisms/aboutsec/Aboutsec";

export default function About() {
    return (
        <section className={styles.aboutsec} aria-labelledby='about-me'>
            <MainTemplate container="lg-">
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
            </MainTemplate>
        </section>
    )
}
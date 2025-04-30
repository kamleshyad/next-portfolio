import Image from 'next/image';

import styles from './banner.module.scss';
import { Container } from "../container/Container";

import bannerImg from '../../../../public/images/bannerimg.png'

export const Banner = () => {
    return (
        <div className={styles.bannersec}>
            <Container container="lg-">
                <div className={styles.bnrwrap}>
                    <div className={styles.bnrleftsec}>
                        <h1>I'm Kamlesh Yadav <span>Frontend Developer</span></h1>
                        <h2>Next Js</h2>
                    </div>
                    <div className={styles.bnrrightsec}>
                        <Image src={bannerImg} alt='banner img'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

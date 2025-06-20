import Image from 'next/image';

import styles from './banner.module.scss';
import { MainTemplate } from '../../template/MainTemplate';

import bannerImg from '../../../../public/images/bannerimg.png'

export const Banner = () => {
    return (
        <section className={styles.bannersec} aria-labelledby='page-title'>
            <MainTemplate container="lg-">
                <div className={styles.bnrwrap}>
                    <div className={styles.bnrleftsec}>
                        <h1 id='page-title'>I'm Kamlesh Yadav <span>Frontend Developer</span></h1>
                        <h2>Next Js</h2>
                    </div>
                    <div className={styles.bnrrightsec}>
                        <figure className={styles.bannerimg}>
                            <Image src={bannerImg} alt='Kamlesh Yadav — Frontend Developer portrait image'/>
                        </figure>
                    </div>
                </div>
            </MainTemplate>
        </section>
    )
}

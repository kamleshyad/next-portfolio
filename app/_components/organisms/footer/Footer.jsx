'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './footer.module.scss';

import contactImg from '../../../../public/images/contact-img.png';

import { PhoneIcon } from '../../atoms/icons/Icons';
import { LocationIcon } from '../../atoms/icons/Icons';
import { MailIcon } from '../../atoms/icons/Icons';
import { MainTemplate } from '../../template/MainTemplate';
import { Sectiontitle } from '../../molecules/sectiontitle/Sectiontitle';

export const Footer = () => {

    const pathName = usePathname();

    return (
        <footer className={styles.sitefooter}>
            <MainTemplate container="lg-">
                {
                    pathName == "/" ? <Sectiontitle id="Contact" title="Get In Touch"/> : ""
                }
                
                <div className={styles.contactsec}>
                    <div className={styles.contactleft}>
                        <figure>
                            <Image src={contactImg} alt="footer contact img"/>
                        </figure>
                    </div>
                    <div className={styles.contactright}>
                        {
                            pathName == "/" ? <h3>Let’s Talk</h3> : <h3>Get In Touch</h3>
                        }
                        <p>Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                        <div className={styles.contactbox}>
                            <div className={styles.contactlist}>
                                <figure className={styles.icon}>
                                    <LocationIcon />
                                </figure>
                                <div className={styles.info}>
                                    <h4>Address</h4>
                                    <p>Mumbai, Maharashtra</p>
                                </div>
                            </div>
                            <div className={styles.contactlist}>
                                <figure className={styles.icon}>
                                    <PhoneIcon />
                                </figure>
                                <div className={styles.info}>
                                    <h4>Phone</h4>
                                    <Link href="tel:9168737879">9168737879</Link>
                                </div>
                            </div>
                            <div className={styles.contactlist}>
                                <figure className={styles.icon}>
                                    <MailIcon />
                                </figure>
                                <div className={styles.info}>
                                    <h4>Email</h4>
                                    <Link href="mailto:kamleshyadav1795@gmail.com">kamleshyadav1795@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainTemplate>
        </footer>
    )
}

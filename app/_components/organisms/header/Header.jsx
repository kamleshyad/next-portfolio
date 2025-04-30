'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/app/utils/router";
import styles from './header.module.scss';
import { MobileIcon } from "../../atoms/icons/Icons";
import { Container } from "../container/Container";
import { Banner } from "../banner/Banner";

export const Header = () => {

    const pathname = usePathname();

    const navItems = [
        {href: routes.home, label: 'Home' },
        {href: routes.about, label: 'About'},
        {href: routes.skills, label: 'Skills'},
        {href: routes.projects, label: 'Projects'},
        {href: routes.contact, label: 'Contact'},
    ]

    return (
        <>
            <header className={styles.siteheader}>
                <Container container="fluid-">
                    <div className={styles.headersec}>
                        <div className={styles.logo}>
                            <Link href="/" scroll={false}><span>K</span>amlesh.Dev</Link>
                        </div>
                        <div className={styles.headerright}>
                            <ul className="unset">
                                {
                                    navItems.map(({href, label}) => {
                                        return(
                                            <li key={href}>
                                                <Link href={href} scroll={false} className={pathname === href ? styles.active : ''}>{label}</Link>
                                            </li>
                                        )
                                    })  
                                }
                            </ul>
                            <div className={styles.callbtn}>
                                <Link href="tel:9168737879"><MobileIcon></MobileIcon>+91 9168737879</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <Banner />
        </>
    )
}

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.scss';

import { MobileIcon } from "../../atoms/icons/Icons";
import { Container } from "../container/Container";
import { Banner } from "../banner/Banner";
import { Innerbanner } from "../innerbanner/Innerbanner";
import { Nav } from "../../molecules/nav/Nav";
import { PrimaryLink } from "../../atoms/buttons/Button";

export const Header = () => {

    const pathname = usePathname();

    const navItems = [
        {href: '/', label: 'Home' },
        {href: '/about', label: 'About'},
        {href: '/experience', label: 'Experience'},
        {href: '/skills', label: 'Skills'},
        {href: '/projects', label: 'Projects'},
        {href: '/contact', label: 'Contact'},
    ]

    const currentPage = navItems.find(item => item.href === pathname );
    const pageTitle = currentPage?.label || '404 page';

    return (
        <>
            <header className={styles.siteheader}>
                <Container container="fluid-">
                    <div className={styles.headersec}>
                        <div className={styles.logo}>
                            <Link href="/" scroll={false}><span>K</span>amlesh.Dev</Link>
                        </div>
                        <div className={styles.headerright}>
                            <Nav />
                            <div className="headerbtnsec">
                                <PrimaryLink href="tel:9168737879" aria-label="call button 9168737879"><MobileIcon />+91 9168737879</PrimaryLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            {
                (pathname === '/') ? <Banner /> : <Innerbanner pageTitle={pageTitle}/>
            }
        </>
    )
}

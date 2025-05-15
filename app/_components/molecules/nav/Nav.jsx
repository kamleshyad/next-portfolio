'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './nav.module.scss';

export const Nav = () => {

    const pathname = usePathname();

    const navItems = [
        {href: '/', label: 'Home' },
        {href: '/about', label: 'About'},
        {href: '/skills', label: 'Skills'},
        {href: '/experience', label: 'Experience'},
        {href: '/projects', label: 'Projects'},
        {href: '/contact', label: 'Contact'},
    ]

    return (
        <nav className={styles.nav} aria-label="Main navigation">
            <ul className="unset">
                {
                    navItems.map(({href, label}) => {
                        return(
                            <li key={href}>
                                <Link href={href} scroll={false} className={pathname === href ? styles.active : ''} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

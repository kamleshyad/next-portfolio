'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './nav.module.scss';

import { Navlink } from "../navlink/Navlink";

export const Nav = () => {

    const pathname = usePathname();

    const navItems = [
        {href: '/', label: 'Home' },
        {href: '/about', label: 'About'},
        {href: '/experience', label: 'Experience'},
        {href: '/skills', label: 'Skills'},
        // {href: '/projects', label: 'Projects'},
        {href: '/contact', label: 'Contact'},
    ]

    return (
        <nav className={styles.nav} aria-label="Main navigation">
            <ul className="unset">
                {
                    navItems.map(({href, label}) => {
                        return(
                            <li key={href}>
                                <Navlink href={href}>{label}</Navlink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from '../nav/nav.module.scss';

export const Navlink = ( {href, children} ) => {

    const pathName = usePathname();

    const isActive = pathName === href || pathName.startsWith(href + '/');

    return (
        <Link href={href} className={isActive ? styles.active : ''} aria-current={isActive ? 'page' : undefined}>{children}</Link>
    )
}

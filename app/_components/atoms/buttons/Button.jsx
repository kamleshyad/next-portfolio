import Link from "next/link";

import styles from './page.module.scss';

export const PrimaryBtn = ({children}) => {
    return (
        <button className={styles.primarylink}>{children}</button>
    )
}

export const PrimaryLink = ({href, children, ...props}) => {
    return (
        <Link href={href} className={styles.primarylink} {...props}>{children}</Link>
    )
}

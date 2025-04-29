import Link from "next/link";

import styles from './header.module.scss';
import { Container } from "../container/Container";

export const Header = () => {
    return (
        <header className={styles.siteheader}>
            <Container container="lg-">
                <div className={styles.headersec}>
                    <div className={styles.logo}>
                        <Link href="/"><span>K</span>amlesh.Dev</Link>
                    </div>
                    <div className={styles.headerright}>
                        <ul className="unset">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/skills">Skills</Link>
                            </li>
                            <li>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    )
}

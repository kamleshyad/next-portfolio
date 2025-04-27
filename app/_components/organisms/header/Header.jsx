import Link from "next/link";

import styles from './header.module.scss';
import { Container } from "../container/Container";

export const Header = () => {
    return (
        <header>
            <Container>
                <div className={styles.headersec}>
                    <div className="logo">
                        <Link href="/">Kamlesh.Dev</Link>
                    </div>
                    <div className="headerright">
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

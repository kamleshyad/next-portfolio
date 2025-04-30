import styles from './footer.module.scss';
import { Container } from "../container/Container";

export const Footer = () => {
    return (
        <footer className={styles.sitefooter}>
            <Container container="lg-">
                <h2>Footer</h2>
            </Container>
        </footer>
    )
}

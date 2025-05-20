import styles from './copyright.module.scss';
import { Container } from '../../template/container/Container';

export const Copyright = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <div className={styles.copyrightsec}>
            <Container>
                <p>&copy; {year}. Designed by <span>Kamleshyad</span>. All right reserved.</p>
            </Container>
        </div>
    )
}

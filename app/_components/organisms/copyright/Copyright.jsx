import styles from './copyright.module.scss';
import { MainTemplate } from '../../template/MainTemplate';

export const Copyright = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <div className={styles.copyrightsec}>
            <MainTemplate>
                <p>&copy; {year}. Designed by <span>Kamleshyad</span>. All right reserved.</p>
            </MainTemplate>
        </div>
    )
}

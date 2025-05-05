import styles from './innerbanner.module.scss';
import { Container } from "../container/Container"

export const Innerbanner = ({pageTitle = ''}) => {
    return (
        <section className={styles.innerbnrsec} aria-labelledby='innerbanner-title'>
            <Container container="lg-">
                <div className="innerbnrwrap">
                    <h1 id='innerbanner-title'>{pageTitle}</h1>
                </div>
            </Container>
        </section>
    )
}

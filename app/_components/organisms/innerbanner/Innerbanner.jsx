import styles from './innerbanner.module.scss';
import { Container } from "../container/Container"

export const Innerbanner = ({pageTitle = ''}) => {
    return (
        <section className={styles.innerbnrsec}>
            <Container container="lg-">
                <div className="innerbnrwrap">
                    <h1>{pageTitle}</h1>
                </div>
            </Container>
        </section>
    )
}

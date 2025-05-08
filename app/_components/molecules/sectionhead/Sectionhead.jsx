import styles from './sectionhead.module.scss';

export const Sectionhead = ({title, id}) => {
    return (
        <div className={styles.titlesec}>
            <h2 id={id}>{title}</h2>
            <p>{title}</p>
        </div>
    )
}
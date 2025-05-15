import styles from './sectiontitle.module.scss';

export const Sectiontitle = ({title, id}) => {
    return (
        <div className={styles.titlesec}>
            <h2 id={id}>{title}</h2>
            <p>{title}</p>
        </div>
    )
}
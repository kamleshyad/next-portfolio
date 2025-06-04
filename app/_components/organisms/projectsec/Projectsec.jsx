import Link from 'next/link';
import styles from './projectsec.module.scss';

export const Projectsec = () => {
    return (
        <div className={styles.projectsec}>
            <ul className="unset">
                <li>
                    <article>
                        <h3>Project Title</h3>
                        <div className={styles.projecturl}>
                            <Link href="#">Project Url</Link>
                        </div>
                        <div className="skills">
                            <ul className="unset">
                                <li>Html</li>
                                <li>Html</li>
                                <li>Html</li>
                                <li>Html</li>
                                <li>Html</li>
                            </ul>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </article>
                </li>
                <li>
                    <article>

                    </article>
                </li>
                <li>
                    <article>

                    </article>
                </li>
                <li>
                    <article>

                    </article>
                </li>
            </ul>
        </div>
    )
}

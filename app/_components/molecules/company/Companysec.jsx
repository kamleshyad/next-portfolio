import { DesktopPersonIcon } from "../../atoms/icons/Icons";
import styles from "./companysec.module.scss";

export const Companysec = () => {

    const companyData = [
        {year : "06 Sept 2021 - Present", role : "Frontend Developer", companyName : "Saman Technosys Pvt Ltd." }
    ]

    return (
        <div className={styles.companysec}>
            <ul className="unset">
                {
                    companyData.map((item, index) => {
                        return(
                            <li key={index}>
                                <h3>[{item.year}]</h3>
                                <div className={styles.companywrap}>
                                    <div className={styles.iconsec}>
                                        <figure>
                                            <DesktopPersonIcon />
                                        </figure>
                                    </div>
                                    <div className={styles.companydetail}>
                                        <h4>{item.role}</h4>
                                        <p>{item.companyName}</p>
                                        <span>Full Time</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

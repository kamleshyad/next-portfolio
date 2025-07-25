import styles from './sitecontent.module.scss';

import { MainTemplate } from "../MainTemplate";

export const Sitecontent = ({children}) => {
    return (
            <div className={styles.site__content}>
                <MainTemplate container="lg-">
                    {children}
                </MainTemplate>      
            </div>
    )
}
'use client';

import { useState } from 'react';
import { TriangleShapeIcon } from '../icons/Icons';

import styles from './accordian.module.scss';
import { FAQDATA } from '@/app/utils/Constant';

export const Accordian = ({width = '1024px'}) => {

    const [ activeIndex, setActiveIndex ] = useState(0);

    const handleToggle = (f_id) => {
        return(
            setActiveIndex(f_id === activeIndex ? null : f_id)
        )
    }

    return (
        <div className={styles.accordiansec}>
            {
                FAQDATA.map(( faq ) => {

                    const {f_id, faqQuestion, faqAnswer} = faq;
                    const isActive = activeIndex === f_id;
                    return(
                        <div className={styles.acclist} key={f_id}>
                            <div className={styles.title} onClick={ ()=> handleToggle(f_id) }>
                                <h4>{faqQuestion}</h4>
                                <span className={`${isActive ? styles.rotate : undefined}`}><TriangleShapeIcon /></span>
                            </div>
                            {
                                isActive && (
                                    <div className={`${styles.content} ${isActive ? styles.active : ''}`}>
                                        <p>{faqAnswer}</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

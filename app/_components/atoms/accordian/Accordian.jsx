'use client';

import { useState, useRef, useEffect } from 'react';
import { TriangleShapeIcon } from '../icons/Icons';

import styles from './accordian.module.scss';
import { FAQDATA } from '@/app/utils/Constant';

export const Accordian = ({width = '1024px'}) => {

    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ hasMounted, setHasMounted ] = useState(false);
    const refs = useRef({});

    useEffect(() => {
        setHasMounted(true);
    }, [])

    const handleToggle = (id) => {
        return(
            setActiveIndex( (preVal) => {
                return preVal === id ? null : id;
            })
        )
    }

    return (
        <div className={styles.accordiansec}>
            {
                FAQDATA.map(( faq ) => {

                    const {id, faqQuestion, faqAnswer} = faq;
                    const isActive = activeIndex === id;
                    return(
                        <div className={styles.acclist} key={id}>
                            <button className={styles.accbtn} onClick={ ()=> handleToggle(id) }>
                                <span className={styles.title}>{faqQuestion}</span>
                                <span className={`${styles.icon} ${isActive ? styles.rotate : undefined}`}><TriangleShapeIcon /></span>
                            </button>
                            <div ref={ (el) => { if(el) refs.current[id] = el} } style={ {maxHeight: isActive && hasMounted ? `${refs.current[id]?.scrollHeight}px` : "0px"} }
                                className={styles.content}>
                                <p>{faqAnswer}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

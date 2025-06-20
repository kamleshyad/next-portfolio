import styles from './accordian.module.scss';

export const Accordian = ({width = '1024px'}) => {
    return (
        <div className={styles.accordiansec} style={{width: `min(${width}, 96%)`, margin: '0 auto'}}>
            <div className={styles.acclist}>
                <div className={styles.title}>
                    <h4>What is the current price of Mahindra Happinest Palghar Project 2?</h4>
                    <span class="iconbox"></span>
                </div>
                <div className={styles.content}>
                    <p>The current price of Mahindra Happinest Palghar Project 2 is ₹ 3262 Per Sq. Ft Onwards.</p>
                </div>
            </div>
            <div className={styles.acclist}>
                <div className={styles.title}>
                    <h4>What is the current price of Mahindra Happinest Palghar Project 2?</h4>
                    <span class="iconbox"></span>
                </div>
                <div className={styles.content}>
                    <p>The current price of Mahindra Happinest Palghar Project 2 is ₹ 3262 Per Sq. Ft Onwards.</p>
                </div>
            </div>
            <div className={styles.acclist}>
                <div className={styles.title}>
                    <h4>What is the current price of Mahindra Happinest Palghar Project 2?</h4>
                    <span class="iconbox"></span>
                </div>
                <div className={styles.content}>
                    <p>The current price of Mahindra Happinest Palghar Project 2 is ₹ 3262 Per Sq. Ft Onwards.</p>
                </div>
            </div>
            <div className={styles.acclist}>
                <div className={styles.title}>
                    <h4>What is the current price of Mahindra Happinest Palghar Project 2?</h4>
                    <span class="iconbox"></span>
                </div>
                <div className={styles.content}>
                    <p>The current price of Mahindra Happinest Palghar Project 2 is ₹ 3262 Per Sq. Ft Onwards.</p>
                </div>
            </div>
            <div className={styles.acclist}>
                <div className={styles.title}>
                    <h4>What is the current price of Mahindra Happinest Palghar Project 2?</h4>
                    <span class="iconbox"></span>
                </div>
                <div className={styles.content}>
                    <p>The current price of Mahindra Happinest Palghar Project 2 is ₹ 3262 Per Sq. Ft Onwards.</p>
                </div>
            </div>
        </div>
    )
}

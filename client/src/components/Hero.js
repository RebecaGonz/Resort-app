import React from 'react'
import styles from './index.module.css'

function Hero() {
    return (
        <div className={styles.heroImage}>
            <div className={styles.heroBox}>
                <h1 className={styles.heroTitle }>Luxurius Rooms</h1>
                <div className={styles.heroLine}></div>
                <p className={styles.heroDesc}>Deluxe Room starting at $200</p>
                <button className={styles.heroBtn} > Our Rooms</button>
            </div>
        </div>
    )
}

export default Hero
import React, { useState } from 'react'
import styles from '../components/index.module.css'


function RoomsFeat(props) {
    // const  {img, url, name, price} = props;
    // const [rooms, setRooms]= useState([]);

    return (
        <div className={styles.stylesBack}>
            <br></br>
            <h1 className={styles.title}>Featured Rooms</h1>
            <div className={styles.heroLine}></div>
            <div className={styles.allRooms}>
                <div className={styles.eachRoom}>
                    <div>hello</div>
                    <p>world</p>
                    <p>again</p>
                </div>
                <div className={styles.eachRoom}>
                    <div>hello</div>
                </div>
                <div className={styles.eachRoom}>
                    <div>hello</div>
                </div>
            </div>

        </div>
    )
}
export default RoomsFeat
import React, { useState } from 'react'
import { Link } from '@reach/router';
import styles from '../components/index.module.css'
import backGround from '../components/images/room.jpg';


function RoomsFeat(props) {
    // const  {img, url, name, price} = props;
    // const [rooms, setRooms]= useState([]);

    return (
        <div className={styles.stylesBack}>
            <br></br>
            <h1 className={styles.title}>Featured Rooms</h1>
            <div className={styles.heroLine}></div>
            <br></br>
            <div className={styles.allRooms}>
                <div style={{ backgroundImage : `url(${backGround})` }}  className={styles.eachRoom}>
                    <div className={styles.priceTop}>price</div>
                    <div className={styles.roomName}>Room Name</div>
                    <div className={styles.roomLink}>
                        <Link  className={styles.linkText} to = "/rooms">Details</Link>
                    </div>
                </div>
                <div style={{ backgroundImage : `url(${backGround})` }}  className={styles.eachRoom}>
                    <div className={styles.priceTop}>price</div>
                    <div className={styles.roomName}>Room Name</div>
                    <div className={styles.roomLink}>
                        <Link  className={styles.linkText} to = "/rooms">Details</Link>
                    </div>
                </div>
                <div style={{ backgroundImage : `url(${backGround})` }}  className={styles.eachRoom}>
                    <div className={styles.priceTop}>price</div>
                    <div className={styles.roomName}>Room Name</div>
                    <div className={styles.roomLink}>
                        <Link  className={styles.linkText} to = "/rooms">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RoomsFeat
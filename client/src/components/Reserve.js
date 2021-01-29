import React from 'react';
import styles from '../components/index.module.css';
import { Link } from '@reach/router';

function Reserve(props) {
    const { reserveId, room, date, adult, children } = props;
    return (
        <div className={styles.reservation}>
                <div>
                    <h3>Reservation ID: {reserveId}</h3><br></br>
                    <h6>Room: {room}</h6>
                    <h6>Date: {date.toString()}</h6>
                    <h6>Adults: {adult}</h6>
                    <h6>Children: {children}</h6>
                </div>
                <div>
                    <Link to="cancel">Free Cancelation</Link>
                </div>
            </div>
    )

}

export default Reserve;
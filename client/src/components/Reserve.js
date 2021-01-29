import React from 'react';
import styles from '../components/index.module.css';
import { Link } from '@reach/router';

function Reserve(props) {
    return (
        <div className={styles.reservation}>
                <div>
                    <h3>Reservation ID : </h3><br></br>
                    <h6>Room : </h6>
                    <h6>Date : </h6>
                    <h6>Adults : </h6>
                    <h6>Children : </h6>
                </div>
                <div>
                    <Link to="cancel">Free Cancelation</Link>
                </div>
            </div>
    )

}

export default Reserve;
import React from 'react';
import styles from '../components/index.module.css';
import axios from 'axios';
import { navigate } from '@reach/router';
// import { Link } from '@reach/router';

function Reserve(props) {
    const { reserveId, room, date, adult, children, setReserve } = props;
    function cancel_reservation(id) {
        axios.delete('http://localhost:8000/reservation/deleteOne/' + id)
            .then(() => navigate('/reservation'))
            .catch(err => console.log(err));

    }
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
                    <button className="btn btn-link" onClick={ () => {cancel_reservation(reserveId)} } >Free Cancelation</button>
                </div>
            </div>
    )

}

export default Reserve;
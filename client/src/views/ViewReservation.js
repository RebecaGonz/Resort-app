import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/reservation-page.jpg';
import styles from '../components/index.module.css';
import Reserve from '../components/Reserve';
import axios from 'axios';

function ViewReservation() {
    const user_id = localStorage.getItem("userId");
    const [reservations, setReservations] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/reservation/user', { params: { user_id } })
            .then(response => {
                setReservations(response.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles.serviceBack}>
            <NavBar />
            <Hero back={backGround}
                title="Your Reservations"
                desc=""
                btnText="RETURN HOME"
                btnTo="/rooms"
            />
            {
                loaded && <Reserve reservations = {reservations} setReserve={setReservations} />
            }
        </div>
    )
}

export default ViewReservation;
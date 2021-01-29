import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/reservation-page.jpg';
import styles from '../components/index.module.css';
import Reserve from '../components/Reserve';

function ViewReservation() {

    return (
        <div className={styles.serviceBack}>
            <NavBar />
            <Hero back={backGround}
                title="Your Reservation"
                desc=""
                btnText="RETURN HOME"
                btnTo="/rooms"
            />
            <Reserve reserveId="" room="" date="" adult="" children="" />
            <Reserve reserveId="" room="" date="" adult="" children="" />
            <Reserve reserveId="" room="" date="" adult="" children="" />
        </div>
    )
}

export default ViewReservation;
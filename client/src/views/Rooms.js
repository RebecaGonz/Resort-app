import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/room.jpg';
import styles from '../components/index.module.css';
import { Link } from '@reach/router';

function Rooms() {
    return (
        <div className={styles.serviceBack}>
            <NavBar />
            <Hero back={backGround} title="Our Rooms" desc="" btnText="RETURN HOME" btnTo="/home"/>
            <Link to="/home/singleRooms">take me to single room</Link>
            <p>Page for all the rooms</p>
        </div>
    )
}


export default Rooms
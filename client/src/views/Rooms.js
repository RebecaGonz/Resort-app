import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/room.jpg';

function Rooms() {
    return (
        <div>
            <NavBar />
            <Hero back={backGround} title="Our Rooms" desc="" btnText="RETURN HOME" btnTo="/home"/>
            <p>Page for all the rooms</p>
        </div>
    )
}


export default Rooms
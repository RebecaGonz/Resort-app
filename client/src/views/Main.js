import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import RoomsFeat from '../components/RoomsFeat'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import styles from '../components/index.module.css'
import background from '../components/images/resort.JPG';

function Main() {
    const [services, setServices]= useState({
        services:[
            {
                icon: <FaCocktail />,
                title: "Happy Ours ",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaHiking />,
                title: "Hiking places",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttles",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaBeer/>,
                title: "Best Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        ]
    })
    console.log(services)

    return (
        <div className={styles.serviceBack}>
            <NavBar/>
            <Hero back = {background}/>
            <div>
                <h1 className={styles.title}>Services</h1>
                <div className={styles.heroLine}></div>
                <div className = {styles.allServices}>
                        {services.services.map((item,idx) =>
                        <div className = {styles.serviceItems}>
                            <p key ={idx}> {item.icon}</p>
                            <p> {item.title}</p>
                            <p> {item.info}</p>
                        </div>
                        )}
                </div>
            </div>
            <RoomsFeat/>
        </div>
    )
}

export default Main;
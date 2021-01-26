import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import styles from '../components/index.module.css'
import backGround from '../components/images/resort.JPG';


function Main() {
    const [services, setServices]= useState({
        services:[
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaHiking />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaShuttleVan />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            },
            {
                icon: <FaBeer/>,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        ]
    })

    return (
        <div>
            <NavBar/>
            <Hero back={backGround} title="Luxurius Rooms" desc="Deluxe Room starting at $200" btnText="Our Rooms" btnTo="/rooms" />
            <div>
                <h1>Services</h1>
                <div className={styles.heroLine}></div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
import React from 'react';
import styles from '../components/index.module.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/familyRoom.jpg';
import roomImg from '../components/images/roomDetail.jpg';
function SingleRoom() {
    return (
        <div className={styles.serviceBack}>
            <NavBar />
            <Hero back={backGround}
                title="Family Econamy Room"
                desc=""
                btnText="BACK TO ROOMS"
                btnTo="/rooms"
            />
            <div className={styles.singleRoom}>
                <div className={styles.singleRoomImages}>
                    <img src={roomImg} alt="" />
                    <img src={roomImg} alt="" />
                    <img src={roomImg} alt="" />
                </div>
                <div className={styles.singleRoomInfo}>
                    <div className={styles.desc}>
                        {/* <h3>Details</h3> */}
                        <h2>Details</h2>
                        <p>
                            Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed
                            pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade
                            sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher
                            retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr
                            gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk.
                            Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.
                        </p>
                    </div>
                    <div className={styles.info}>
                        <h2>Info</h2>
                        <h5>Price : $200</h5>
                        <h5>Size : 800 SQFT</h5>
                        <h5>Max Capacity : 2 People</h5>
                        <h5>pets not allowed</h5>
                        <h5>Free breakfast</h5>
                    </div>
                </div>
            </div>
            <p>page for a single room</p>
        </div>
    )
}


export default SingleRoom
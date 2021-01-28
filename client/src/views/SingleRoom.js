import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../components/index.module.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import backGround from '../components/images/familyRoom.jpg';
import roomImg from '../components/images/roomDetail.jpg';
function SingleRoom(props) {
    const { id } = props;
    const [rooms, setRooms] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/room/findOne/' + id)
            .then(res => setRooms(res.data))
            .catch(err => console.log(err));
    }, []);
    console.log("all room", rooms);
    if (rooms === null) {
        return (
            <p>Loading....</p>
        )
    }
    else {
        const gal_img = rooms.gallery_images;
        return (
            <div className={styles.serviceBack}>
                <NavBar />
                <Hero back={rooms.featured_image}
                    title={rooms.type}
                    desc=""
                    btnText="BACK TO ROOMS"
                    btnTo="/rooms"
                />
                <div className={styles.singleRoom}>
                    <div className={styles.singleRoomImages}>
                        {
                            gal_img.map((item, idx) => {
                                // console.log("item ",item);
                                <h1>hello</h1>
                                // <img src={ backGround } alt="" />
                            })
                        }
                    </div>
                    <div className={styles.singleRoomInfo}>
                        <div className={styles.desc}>
                            <h2>Details</h2>
                            <p>
                                {rooms.description}
                            </p>
                        </div>
                        <div className={styles.info}>
                            <h2>Info</h2>
                            <h5>price : ${rooms.price}</h5>
                            <h5>size : 800 SQFT</h5>
                            <h5>max capacity : {rooms.capacity} People</h5>
                            {
                                (rooms.pets) ? <h5>pets allowed</h5> : <h5>pets not allowed</h5>
                            }
                            {
                                (rooms.breakfast_included) ? <h5>free breakfast</h5> : <h5>breakfast not included</h5>
                            }
                        </div>
                    </div>
                </div><br></br>
            </div>
        )
    }
}


export default SingleRoom
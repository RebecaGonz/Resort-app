//NOTE: This page is intended for admins only. It is a developer tool.

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReservationStyle.css';

function MakeReservation(){
    const [user_id, setUser_Id] = useState('');
    const [room_id, setRoom_Id] = useState('');
    const [date, setDate] = useState(new Date());
    const [adult_rsvps, setAdult_Rsvps] = useState(0);
    const [child_rsvps, setChild_Rsvps] = useState(0);
    const [validationErrors, setValidationErrors] = useState([]);
    const [roomsList, setRoomsList] = useState(null);

    useEffect( () => {
        axios.get('http://localhost:8000/room/findAll')
            .then(response => {setRoomsList(response.data)})
            .catch(err => console.log(err));
    }, []);

    function calendarChange(date){
        // var tempDate = date.getFullYear() + " " + (date.getMonth()+1) + " " + date.getDate()
        setDate(date);
        // console.log("Temp Date: " + tempDate);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/reservation/create',
            {user_id, room_id, date, adult_rsvps, child_rsvps})
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                const errorMessages = err.response.data.errors;
                const errorArray = [];
                for (const error in errorMessages) {
                    errorArray.push(errorMessages[error].message)
                }
                setValidationErrors(errorArray);
                console.log(err);
            })
    }

    function checkAvailable(room) {
        console.log(room.dates_in_use)
        console.log(date)
        for (let temp of room.dates_in_use) {
            console.log("temp date",temp);
            if (temp != date)
                return room
        }
    }

    if(roomsList == null){
        return(
        <div>
            <p>(Loading Reservation Page)</p>
        </div>
        )
    }

    else{
        
        const availableRooms = roomsList.filter(checkAvailable)

        return(
        <>
            <div>
                <h1>Make a Reservation</h1>
                <Link to={"/"}>Back to Home</Link>
            </div>
            
            {/* Display a calendar and all available rooms by date. */}
            <div className = "availableRooms">
            <h2>Select a date to see available rooms:</h2>
                <div className = "calendarDisplay">
                    <Calendar 
                        onChange={calendarChange} 
                        value={date} 
                    />
                </div>
                
                <div className = "roomDisplay">
                    {availableRooms.map((room, index) =>
                        <div className = "roomCard" key = {index}>
                            <img src = {room.featured_image} width = '100px'/>
                            <div className = "roomInfo">
                                    <h1>{room.type}</h1>
                                    <table>
                                        <tr>
                                            <th>Max Capacity</th>
                                            <th>Price</th>
                                            <th>Smoking</th>
                                            <th>Pets</th>
                                        </tr>
                                        <tr>
                                            <td>{room.capacity}</td>
                                            <td>{room.price}</td>
                                            <td>{room.smoking ? "Yes" : "No"}</td>
                                            <td>{room.pets ? "Yes" : "No"}</td>
                                        </tr>
                                        <tr>
                                            <th>Twin Beds</th>
                                            <th>Queen Beds</th>
                                            <th>King Beds</th>
                                            <th>Sofa Sleepers</th>
                                        </tr>
                                        <tr>
                                            <td>{room.twin_beds}</td>
                                            <td>{room.queen_beds}</td>
                                            <td>{room.king_beds}</td>
                                            <td>{room.sofa_sleeper}</td>
                                        </tr>
                                        <tr>
                                            <th>Free Breakfast</th>
                                            <th>Free Wifi</th>
                                            <th>Free Parking</th>
                                        </tr>
                                        <tr>
                                            <td>{room.breakfast_included ? "Yes" : "No"}</td>
                                            <td>{room.wifi_included ? "Yes" : "No"}</td>
                                            <td>{room.parking_included ? "Yes" : "No"}</td>
                                        </tr>
                                    </table>
                                <button
                                    className = "selectButton"
                                    id = {room._id}
                                    onClick = {event => setRoom_Id(event.target.id)}
                                >
                                    Select Room
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            
            </div>
            
            <div>
                <form onSubmit = {handleSubmit}>
                    <label>User ID</label>
                    <input
                        type = "String"
                        value = {user_id}
                        onChange = {event => setUser_Id(event.target.value)} 
                    />
                    <br></br>
                    <label>Room ID</label>
                    <input
                        type = "String"
                        value = {room_id}
                        onChange = {event => setRoom_Id(event.target.value)} 
                    />
                    <br></br>
                    <label>Adult RSVPs</label>
                    <input
                        type = "Number"
                        value = {adult_rsvps}
                        onChange = {event => setAdult_Rsvps(event.target.value)} 
                    />
                    <br></br>
                    <label>Child RSVPs:</label>
                    <input
                        type = "Number"
                        value = {child_rsvps}
                        onChange = {event => setChild_Rsvps(event.target.value)} 
                    />
                    <button>Make Reservation</button>
                </form>
            </div>
            <div>
                <ul>
                {validationErrors.map((error, index) =>
                    <li key={index} style={{color:"red"}}>
                        {error}
                    </li>
                )}
                </ul>
            </div>
        </>
        )
    }
}

export default MakeReservation;
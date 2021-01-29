import { Link } from '@reach/router';
import React, { useState } from 'react'
import styles from './index.module.css'
import { FaAlignRight } from "react-icons/fa"
// import { FaUserCircle } from "react-icons/fa"
import axios from 'axios';
// import Login from '../components/Login';
import { navigate } from '@reach/router';
import userIcon from './images/userIcon.png'
import hotelLogo from './images/hotel-symbol.png'



function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const userName = localStorage.getItem("userName");
    // const [errors, setErrors] = useState([]);

    const handleToggle = () => {
        setOpen(!isOpen);
    }
    // console.log(isOpen);

    const showList = () => {
        setShow(!show)
        var dvSites = document.querySelector('#loginList');
        if (show) {
            dvSites.style.display = '';
        }
        else {
            dvSites.style.display = 'none';
        }
    }

    const logoutUser = (e) => {
        console.log("hizo click")
        e.preventDefault();
        axios.delete('http://localhost:8000/logout')
            .then(res => {
                localStorage.setItem("userName", "Guest")
                navigate('/home')
            })
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navCenter}>
                    <div className={styles.navHeader}>
                        <Link to="/home">
                            <img src={hotelLogo} height= "50px" width="100px" alt="hotel-logo" />
                        </Link>
                        <button type="button" className={styles.navBtn} onClick={handleToggle}>
                            <FaAlignRight className={styles.navIcon} />
                        </button>
                    </div>
                    <ul className={isOpen ? styles.navShow : styles.navLinks}>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <img onClick={showList} src={userIcon} height="25px" width="25px" alt=""></img>
                            <p style={{ position: "absolute", height: "25px", margin: '5px', display: 'inline-block' }}>{userName}</p>
                            <div id="loginList" style={{ display: 'none' }}>
                                <ul style={{listStyleType : "none"}}>
                                    <li> <Link to="/register">Login</Link></li>
                                    <li onClick={logoutUser}><a> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <div className={styles.userDisplay}>
                        <FaUserCircle onClick={showList} className={styles.userIcon}></FaUserCircle>
                
                        <div className={styles.userName}>{userName}</div>
                    </div>
                    
                    <div className={styles.loginList}>
                            <ul>
                                <li> <Link to="/register">Login</Link></li>
                                <li onClick={logoutUser}><a> Logout</a></li>
                            </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar
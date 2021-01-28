import { Link } from '@reach/router';
import React, { useState } from 'react'
import styles from './index.module.css'
import { FaAlignRight } from "react-icons/fa"
import userIcon from './images/userIcon.png'

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    }
    // console.log(isOpen);

    return (
        <div>
            <nav  className={styles.navbar}>
                <div className={styles.navCenter}>
                    <div className={styles.navHeader}>
                        <Link to="/home">
                            <img src='#' alt="logofromhotel" />
                        </Link>
                        <button type="button" className={styles.navBtn} onClick={handleToggle}>
                            <FaAlignRight className={styles.navIcon} />
                        </button>
                    </div>
                    <ul className={isOpen? styles.navShow: styles.navLinks }>
                        <li>
                            <Link to = "/home">Home</Link>
                        </li>
                        <li>
                            <Link to = "/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to = "/register"><img src={userIcon} height="25px" width="25px" alt="" ></img></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
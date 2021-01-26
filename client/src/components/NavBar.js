import React, { useState } from 'react'
import styles from './index.module.css'

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    }

    console.log(styles)

    return (
        <div data-text="123" className={styles.navbar}>
            <button type="button" className='nav-btn' onClick={handleToggle}></button>
        </div>
    )
}

export default NavBar
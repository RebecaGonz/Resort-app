import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import backGround from '../components/images/lobby.jpg';
import styles from './index.module.css'

function Register() {
    return (
        <div>
            <NavBar />
            <Hero back={backGround} title="Welcome" desc="" btnText="RETURN HOME" btnTo="/home"/>
            <div className={styles.flex}>
                <div className={styles.registerdiv}>
                    <h3>Register</h3>
                    <form className={styles.register}>
                        <input placeholder="First Name" />
                        <input placeholder="Last Name"/>
                        <input placeholder="Email"/>
                        <input placeholder="Password" />
                        <input placeholder="Confirm Password"/>
                        <input className={styles.logButton} type="submit" value="Create Account" />
                    </form>
                </div>
                <div className={styles.logindiv}>
                    <h3>Login</h3>
                    <form className={styles.login}>
                        <input placeholder="Email"/>
                        <input placeholder="Password"/>
                        <input className={styles.logButton} type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Register
import React from 'react'
import styles from './index.module.css'

function Login() {
    return (
        <div>
            <div className={styles.logindiv}>
                    <h3>Login</h3>
                    <form className={styles.login}>
                        <input placeholder="Email"/>
                        <input placeholder="Password"/>
                        <input className={styles.logButton} type="submit" value="Login" />
                    </form>
            </div>
        </div>
    )
}
export default Login
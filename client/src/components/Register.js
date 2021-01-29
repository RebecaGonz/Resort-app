import React, {useState} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import backGround from '../components/images/lobby.jpg';
import styles from './index.module.css';
import axios from 'axios';
import Login from '../components/Login';
import {navigate} from '@reach/router';

function Register() {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]= useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const registerUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', {
            firstName,
            lastName,
            number,
            email,
            password,
            confirmPassword
        })
            .then(res => navigate('/home'))
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errorArr =[];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }


    return (
        <div>
            <NavBar />
            <Hero back={backGround} title="Welcome" desc="" btnText="RETURN HOME" btnTo="/home"/>
            <div className={styles.flex}>
                <div className={styles.registerdiv}>
                    <h3>Register</h3>
                    {errors.map((err, index) => <p key={index} style={{color:'red'}}>{err}</p>)}
                    <form onSubmit={registerUser} className={styles.register}>
                        <input type="text" placeholder="First Name" onChange={(e) =>setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last Name" onChange={(e) =>setLastName(e.target.value)}/>
                        <input type="text" placeholder="Cell Number/ optional" onChange={(e) =>setNumber(e.target.value)}/>
                        <input type="text" placeholder="Email" onChange={(e) =>setEmail(e.target.value)}/>
                        <input type="text" placeholder="Password" onChange={(e) =>setPassword(e.target.value)} />
                        <input type="text" placeholder="Confirm Password" onChange={(e) =>setConfirmPassword(e.target.value)}/>
                        <input type="text" className={styles.logButton} type="submit" value="Create Account" />
                    </form>
                </div>
                <Login/>
            </div>
        </div>
    )
}


export default Register
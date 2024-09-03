import { useNavigate } from 'react-router-dom'

import { FiEye ,  FiEyeOff } from "react-icons/fi";
import { useState } from 'react'

import './index.css'

const Signup = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    document.title = "Chainfroge-Sing Up"

    const navigate = useNavigate()
    const handleSingup = () => {
        navigate("/log-in")
    }
    return (
        <div className="login-container d-flex-column">
            <h2 style={{marginBottom:"30px"}}>Register to Chainforge</h2>
            <form className="d-flex-column forms-container">
                <label htmlFor="username">Registered Email</label>
                <input className='input-username'  type="text" id="username" placeholder="example@gmail.com" required/>
                
                <label htmlFor="password">Password</label>
                <div className='password-filed'>
                    <input className='input-password' type={passwordVisibility ? "text" : "password"} id="password" placeholder="******"  onChange={e => setPassword(e.target.value)} value={password}  name="password"/>
                    <button type="button" className='eye-btn' onClick={() => setPasswordVisibility(!passwordVisibility)}>{passwordVisibility ?<FiEye/> :  <FiEyeOff/>}</button>
                </div>
                
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <button className='main-btn' type="submit">Signup</button><button onClick={handleSingup}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
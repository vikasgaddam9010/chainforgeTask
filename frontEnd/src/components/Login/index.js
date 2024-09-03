import {useNavigate} from 'react-router-dom'
import { FiEye ,  FiEyeOff } from "react-icons/fi";
import { useState } from 'react';

import './index.css'


const Login = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    document.title = "Chainfroge-Login"
    const navigate = useNavigate()
    const handleSingup = () => {
        navigate("/sign-up")
    }

    const loginSubmitHnadler = e => {
        e.preventDefault()
    }
    
    const handleUsername = e =>{
        const gmailRegex = /^[^\s@]+@gmail\.com$/;
        const result = gmailRegex.test(e.target.value);
        if(result){
            console.log(e.target.value)
            setEmail(e.target.value)
            setError("")
        }else{
            setEmail(e.target.value)
            setError("Plase Enter Correct Mail")
        }
    }

    return (
        <div className="login-container d-flex-column">
            <h2 style={{marginBottom:"30px"}}>Login to Chainforge</h2>
            <form onSubmit={loginSubmitHnadler} className="d-flex-column forms-container">
                <label htmlFor="username">Email</label>
                <input className='input-username' type="text" id="username" onChange={handleUsername} value={email} placeholder="example@gmail.com" />
                {error.length > 0 ? <p className='error'>{error}</p> : <p>  </p>}
                
                <label htmlFor="password">Password</label>
                <div className='password-filed'>
                    <input className='input-password' type={passwordVisibility ? "text" : "password"} id="password" placeholder="******"  onChange={e => setPassword(e.target.value)} value={password}  name="password"/>
                    <button type="button" className='eye-btn' onClick={() => setPasswordVisibility(!passwordVisibility)}>{passwordVisibility ?<FiEye/> :  <FiEyeOff/>}</button>
                    
                </div>
                
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <button className='main-btn' type="submit">Login</button><button onClick={handleSingup}>Signup</button>
                </div>                
            </form>
        </div>
    )
}

export default Login
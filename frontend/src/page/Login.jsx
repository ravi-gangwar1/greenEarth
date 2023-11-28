import React, { useState, useEffect } from 'react';
import '../style/login.css'
import { signupAction, loginAction } from '../actions/userAction';
import {useDispatch} from 'react-redux';

const Login = () => {

    const [state, setState] = useState("Log In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    
    useEffect(()=> {
        if(localStorage.getItem('currentUser')){
            window.location.href = '/';
        }
    }, []);
    const handleLogin = ()=> {
        const user = {email, password};
        dispatch(loginAction(user));
        setEmail('');
        setPassword('');
    }

    const handleSignup = ()=> {
        if(password !== confirmPassword){
            alert("Confirm Password not matched")
        }else{

        const user = {name, email, password, confirmPassword};
        dispatch(signupAction(user));
        setEmail('');
        setPassword('');
        setName('')
        setConfirmPassword('');
        }
    }



    return (
        <div className='main-div'>
           <div className='container'>
            <div className='container-2nd'>
                <h5 className='h5-fisrt'>greenEarth</h5>
                {state==="Log In" ? 
                <> 
                    <input 
                    type="text" 
                    placeholder='email address' 
                    value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    <input 
                    type="password" 
                    placeholder='Password'
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                    ></input>
                </> :
                <>
                    <input 
                    type="text" 
                    placeholder='email address' 
                    value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    <input 
                    type="text" 
                    placeholder='Full Name'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    ></input>
                    <input 
                    type="password" 
                    placeholder='Password'
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                    ></input>
                    <input 
                    type="password" 
                    placeholder='Confirm Password'
                    value={confirmPassword} 
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    ></input>
                </>}
                <div className='orDiv'><span><hr/></span><p>OR</p><span><hr/></span></div>
                <p className='para1'>People who use our service may have uploaded<br/> your contact information to<br/> Instagram. <a href="#">Learn more</a></p>
                <p className='para2'>By signing up, you agree to our <a href='#'>Terms</a>, <br/><a href='#'>Privacy Policy</a> and <a href='#'>Cookies Policy.</a></p>
                {state==="Log In" ? 
                    <button className='signbtn' type='' onClick={handleLogin}>Log In</button> :
                    <button className='signbtn' type='' onClick={handleSignup}>Sign Up</button>
                }
            </div>
            </div>
            <div className='loginContainer'>
                <p>{state === "Log In" ? "Havn't an account? ":" Have an account? "}<a href='#' onClick={ () =>{setState( state == "Log In" ? "Sign Up" : "Log In")}}>{state === 'Log In' ? 'Sign Up' : 'Log In'}</a></p>
            </div>
        </div>
    )
}

export default Login;
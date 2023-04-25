import  { useContext, useState } from 'react';
import './SingUp.css'
import { userInfo } from '../UserContext/UserContext';
import {  FaGoogle } from 'react-icons/fa';

import { Link, Navigate } from 'react-router-dom';


const SingUp = () => {

    let {createAccount,googleSingUp , verifyEmail} = useContext(userInfo)

    let [err, setErr]= useState([]);

    let submit =(event)=>{
        event.preventDefault();

        

       
        let email = event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.confirmPassword.value;

        console.log(email, password);

        setErr('')
        
        if(password != confirmPassword){

            setErr('Password Did not Match')
            return

        }

        if(password.length <6){
            setErr('Password must be at least 6 character ')
            return 
        }

        createAccount(email, password)
        .then(res=>{
            let user= res.user;
            verifyEmail(user);
            alert('Account Created Successfully. Verify Your Email For Better Experience')
            console.log(user);
        })
        .catch(err=>{
            console.log(err.message)
            setErr(err.message)
        })


        

        
    }

    let google =()=>{
        googleSingUp()
        .then(res=>{
            let user= res.user;
            console.log(user);
            Navigate('/home')

        })
        // .catch(err=> console.log(err.message))
     
    }

    return (
        <div>

            <form onSubmit={submit} className="SignUpForm">
                <h2 className='text-3xl font-semibold'>Sign Up</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <h4>Already have an account  ? <Link to='/login' className='underline'>Login</Link></h4>
                {err}
                <button type="submit" className='mr-2'>Submit</button>
                <button onClick={google}> <FaGoogle className='inline-block'></FaGoogle> SingUp With Google</button>
                
                
                
            </form>
            
    
        </div>
    );
};

export default SingUp;
import '../css/signup.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

function Signup(){
    const navigate =  useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = async(e) =>{
        e.preventDefault();

        try {
            if(password.length < 6){
                toast.error("Password should contain atleast 6 Characters")
            }
            await createUserWithEmailAndPassword(auth,email,password)
            console.log("User created successfully");
            toast.success("Your Account was created. Please login to continue .")
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="signup">
            <h1>Sign up</h1>
            <form onSubmit={submitHandler}>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter the Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter the Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" id="submitBtn" />
            </form>
            <div className="footer">
                <Link to="/">Already a member? <span>login</span></Link>
            </div>
        </div>
    );
}

export default Signup;


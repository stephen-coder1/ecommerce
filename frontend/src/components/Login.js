import '../css/login.css' 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

function Login(){
    const navigate =  useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = async(e) =>{
        e.preventDefault();

        window.localStorage.setItem("isLoggedIn" , true)  
        try {
            
            const authPass = await signInWithEmailAndPassword(auth,email,password)
            console.log(authPass);
            
            toast.success("User Login successfully.")
            console.log("User Login successfully");
            navigate('/home')

        } catch (error) {
            if(password.length < 6){
                toast.error("Password should contain atleast 6 Characters")
            }
            else{
                toast.error("Password incorrect! Please try again")
            }
            console.log(error);
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
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
                <Link to="/signup">Not a member? <span>Signup</span></Link>
            </div>
        </div>
    );
}


export default Login;
import React,{useState,useRef} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import db from '../firebase';
import {doc,setDoc} from 'firebase/firestore';

function LoginPage() {
    const currentUser = useSelector(state => state.currentUser)
    const [login,toggleLogin] = useState(true);
    const [error,setError] = useState("");
    const auth = getAuth();
    let history = useHistory();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const toggleMode = (e) => {
        e.preventDefault();
        toggleLogin(!login)
        setError("")
    }

    const handleSubmit = (e) => {
        setError("")
        e.preventDefault();
        if (login){
            signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then(
                async (userCredentials) => {
                    //update user storage state
                    //clear fields and move to other page
                    emailRef.current.value = ""
                    passwordRef.current.value = ""
                    history.push("/")
                }
            ).catch(
                (error) => {
                    console.log(error.code);
                    console.log(error.message);
                }
            )
        } else {
            if (emailRef.current.value.length === 0){
                setError(prevState => prevState + "Email empty ")
            }
            if (passwordRef.current.value !== passwordConfirmRef.current.value){
                setError(prevState => prevState + "Password not the same")
            }

            if (error === ""){
                createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then(
                    async (userCredentials) => {
                        //Initialize userCredentials
                        await setDoc(doc(db,"userStorage",userCredentials.user.uid),{
                            articleFavourite: [],
                            noteStorage: []
                        })
                        console.log(userCredentials)
                    }
                ).catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                })
            }
            
        }
    }

    return (
        <div className="container">
            {error && <h4>{error}</h4>}
            <form onSubmit={handleSubmit}>
                {!login && 
                    <React.Fragment>
                        <label>Username</label>
                        <input type="text" ref={usernameRef}></input>
                    </React.Fragment>}
                <label>Email</label>
                <input type="text" ref={emailRef}></input>
                <label>Password</label>
                <input type="password" ref={passwordRef}></input>
                {!login && 
                    <React.Fragment>
                        <label>Confirm Password</label>
                        <input type="password" ref={passwordConfirmRef}></input>
                    </React.Fragment>}
                <div><button type="submit">{login ? "Login":"Sign Up"}</button></div>
                <div><button onClick={toggleMode}>{login ? "Sign Up":"Already have an account"}</button></div>
            </form>
            {JSON.stringify(auth.currentUser)}
            <h6>current user state:</h6>
            {currentUser? currentUser.uid:""}
        </div>
    )
}

export default LoginPage;

import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSignInWithGoogle ,useCreateUserWithEmailAndPassword,useUpdateProfile,useSendPasswordResetEmail, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from 'react-toastify';

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [shown, setShown] = useState(false);
  
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user2,
    loading2,
    error2,
  ] = useSignInWithEmailAndPassword(auth);
  const [email,setEmail]= useState('')
 
  let loginError;

  if (loading||loading1 || updating ||sending || loading2) {
    return <Loading></Loading>;
  };
  

  if(error|| error1||error2||errorReset){
    loginError = <p className="my-2 text-danger fs-5">{error?.message||error1?.message||error2?.message||errorReset?.message}</p>
  }
 
  const from = '/'


    if (user||user1 ||user2) {
      navigate(from, { replace: true });
    }


  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setEmail(email)
    const password = event.target.password.value;
   if(email&&password){
    signInWithEmailAndPassword(email, password)
   }

  };
  

  const handleSignUp = async(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.user.value;
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName });
    toast('Successfully SignUp !!')
  }
 
 
  const handleResetPassword = async() => {  
     if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Send Your email");
    } else {
      toast.error("Enter your email address.");
    }
  }
  return (
    <div className="pt-5 pb-5 mb-5 login-pages">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    checked
                  />
                  <label for="tab-1" className="tab">
                    Login
                  </label>
                  <input id="tab-2" type="radio" name="tab" className="sign-up" />
                  <label for="tab-2" className="tab">
                    Sign Up
                  </label>
                  <div className="login-space">
                    <div className="login">
                      <form action="" onSubmit={handleLogin}>
                        <div className="group">
                          <label for="pass" className="label">
                            Email Address
                          </label>
                          <input
                            id="pass"
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Enter your email address"
                            
                          />
                        </div>
                        <div className="group">
                          <label for="pass" className="label">
                            Password
                          </label>
                          <div className="input-password d-flex ">
                            <input
                              id="pass"
                              type={shown ? "text" : "password"}
                              name="password"
                              className="input"
                              data-type={shown ? "text" : "password"}
                              placeholder="Enter your password"
                              
                            />
                            {shown ? (
                              <FontAwesomeIcon
                                className="reveal"
                                icon={faEye}
                                onClick={() => setShown(!shown)}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="reveal"
                                icon={faEyeSlash}
                                onClick={() => setShown(!shown)}
                              />
                            )}
                          </div>
                        </div>
                        {loginError}
                        <div className="mb-2 text-white">
                          <button className="btn text-white" onClick={handleResetPassword}>
                            Forgot Password?
                          </button>
                        </div>
                        <div className="group">
                          <input type="submit" className="button" value="Login" />
                        </div>
                      </form>

                      <div className="hr"></div>
                      <button
                        className="btn w-100 py-3 fs-5 google-btn"
                        onClick={() => signInWithGoogle()}
                      >
                        {" "}
                        Continue with Google
                      </button>
                    </div>
                    <div className="sign-up-form">
                     <form action="" onSubmit={handleSignUp}>
                     <div className="group">
                        <label for="user" className="label">
                          Username
                        </label>
                        <input
                          id="user"
                          type="text"
                          name="user"
                          className="input"
                          placeholder="Create your Username"
                        />
                      </div>
                      <div className="group">
                        <label for="pass" className="label">
                          Email Address
                        </label>
                        <input
                          id="pass"
                          type="email"
                          className="input"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <div className="group">
                        <label for="pass" className="label">
                          Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          name="password"
                          className="input"
                          data-type="password"
                          placeholder="Create your password"
                          required
                        />                        
                      </div>
                      {loginError}
                      <div className="mb-2 text-white ">
                        <label for="tab-1" className="ms-2">Already Member?</label>
                      </div>
                      <div className="group">
                        <input type="submit" className="button" value="Sign Up" />
                      </div>
                     </form>
                      <div className="hr"></div>
                      
                      <button
                        className="btn w-100 py-3 fs-5 google-btn"
                        onClick={() => signInWithGoogle()}
                      >
                        {" "}
                        Continue with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Full.css';
import './Welcome.css';

export const Welcome = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const handleSignUp = () => {
    setIsSignUpActive(true);
  };
  const handleSignIn = () => {
    setIsSignUpActive(false);
  };


  return (

  <div className='WelcomeCss '>
  
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      
	    <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
		      	<Link to="/home"> <button className="sign-up-button" >Logup</button></Link>
            <button className="ghost" onClick={handleSignIn}>Sign In</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
             <div className='check'>
               <input type="checkbox" id="remember" name="remember" value="remember" className='Remember'/>
               <label for="remember">Remember me</label>
               <a href="#">Forgot password</a>
             </div>
            
            <Link to="/home"> <button className="sign-in-button">Login</button> </Link>
            <button className="ghost" onClick={handleSignUp}>Sign Up</button> 
          </form>
        </div>

          <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" onClick={handleSignIn}>Sign In</button>
               </div>

              <div className="overlay-panel overlay-right">
                  <h1>Hello, manager!</h1>
                  <p>Enter your personal details and start a journey with us</p>
                  <button className="ghost" onClick={handleSignUp}>Sign Up</button>
              </div>
           </div>
     </div>
    </div>
 </div>

  );
};

export default Welcome;
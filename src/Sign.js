import React from 'react';

function Sign() {
    <h1>SignUP Form</h1>;
  return(
    <div className="Sign">
   <form >
    <label>Name:</label>
   <input type='text' ></input><br></br>
    <label>Username:</label>
    <input type='text'></input><br></br>
    <label>Email:</label>
    <input type='text'></input><br></br>
    <label>Password:</label>
    <input type='text'></input><br></br>
    <label>Confirm Password:</label>
    <input type='password'></input><br></br>
    <button className='Button'>SignUp</button>
      </form>
    </div>
  );
}
export default Sign;
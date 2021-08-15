import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
export default function SignUp() {
  return (
    <>
    <div className='hero-container'>
      <div className = 'homeBackground' style = {{ height: 500 }}> 
        <Navbar />
        <h1 className='sign-up'>sign in</h1>
      </div>
    </div>
    </>
  );

}

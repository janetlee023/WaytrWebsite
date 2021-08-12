import React from 'react';
import { Button } from '../Button';
import '../../styles/Team.css';
import '../../App.css';

export default function Team() {
  return (
    <div className='hero-container'>
      <div className='homeBackground'> 
        <div className = 'teamHeader'>
          <p style = {{ fontSize: 64, width: 600, textAlign: 'center' }}>
            Our mission is to help the food industry
          </p>
          <p style = {{ fontSize: 24, width: 600, textAlign: 'center' }}>
            Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around.
          </p>
        </div>
       </div>
    </div>
  )
}

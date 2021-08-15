import React from 'react';
import { Button } from '../Button';
import Navbar from '../Navbar';
import Cards from '../Cards';
import TeamMember from '../TeamMember';
import '../../styles/Team.css';
import '../../App.css';
import Footer from '../Footer';

export default function Team() {
  return (
    <div className='hero-container'>
      <div className = 'homeBackground' style = {{ height: 500 }}> 
        <Navbar />
        <div className = 'teamHeader'>
          <p style = {{ fontSize: 64, width: 600, textAlign: 'center', marginTop: 20 }}>
            Our mission is to help the food industry
          </p>
          <p style = {{ fontSize: 24, width: 600, textAlign: 'center' }}>
            Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around.
          </p>
        </div>
        <div className = 'teamInfo'>
          <p style = {{ fontSize: 48, marginBottom: 20, marginLeft: 60, marginTop: 20 }}>Meet the Team!</p>
          <div className = 'teamMembers'>
            <TeamMember name = 'John K' title = 'johns title'/>
            <TeamMember name = 'Daniel K' title = 'daniels title'/>
            <TeamMember name = 'Janet L' title = 'janets title'/>
            <TeamMember name = 'Joy K' title = 'joys title'/>
            <TeamMember name = 'Jacqueline R' title = 'jackies title'/>
          </div>
          {/* <Cards /> */}
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

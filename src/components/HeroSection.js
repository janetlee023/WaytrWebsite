import React, {FC} from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='homeBackground'> 
        <Navbar />
        {/* <p className = 'waytrTitle'>WAYTR</p> */}
        <div>
          <div className = 'infoArea'>
            <p>CONTACTLESS.</p>
            <p>EFFICIENT</p>
          </div>
          <div className = 'description'>
            <p>
              Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around. 
            </p>
            <div style = {{ marginTop: 60 }}>
              <p style = {{ marginBottom: 10 }}>
                Get In Touch
              </p>
              <div className='input-areas'>
                <form>
                  <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                  />
                  <Button buttonStyle='btn--outline'>Send</Button>
                </form>
              </div>          
            </div>
          </div>          
        </div>
      </div>

      <div className = 'features'>
        <div className = 'featuresHeader'>Features</div>
        <div className = 'featuresBlocks'>
          <div>
            <p className = 'blockHeader'>Indivudal Attention</p>
            <p className ='blockDesc'>
              Users will be able to request food and services without having to wait for someone to come around or having to track someone down. Everything is a finger tip away. 
            </p>            
          </div>
          <div>
            <p className = 'blockHeader'>Easy-to-Use UI</p>
            <p className ='blockDesc'>
              Familiar user interface, but with Waytr features!
            </p>            
          </div>
          <div>
            <p className = 'blockHeader'>Dedication</p>
            <p className ='blockDesc'>
              We believe in supporting the restaurant industry that has been hit so hard with fair prices and easy to integrate software.
            </p>            
          </div>
        </div>
      </div>
      {/* <div className= 'businessInfo'>
        <p style = {{ marginTop: 80, marginLeft: 120, marginBottom: 20 }}>WAYTR</p>
        <p style = {{ marginLeft: 120 }}>
          123 Example St, New York, <br/>NY 12345-6789 <br/>hello@example.com <br/>(123)-456-7890
        </p>
      </div> */}
      {/* <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
    </div>
  );
}

export default HeroSection;

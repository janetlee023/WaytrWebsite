import React from 'react';
import { Link } from 'react-router-dom';

function TeamMember(props) {
  return (
    <>
    <div style = {{ marginBottom: 50 }}>
      <img
        style = {{ height: 200, width: 200 }}
        alt='Travel Image'
        src= 'images/img-2.jpg'
      />      
      <p style = {{ fontSize: 32, fontFamily: 'sans-serif' }}>
        {props.name}
      </p>
      <p style = {{ fontSize: 24, fontFamily:'sans-serif' }}>
        {props.title}
      </p>
    </div>

      {/* <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li> */}
    </>
  );
}

export default TeamMember;

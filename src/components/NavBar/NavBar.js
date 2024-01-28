import React from 'react';
import './NavBar.css'
import heartImage from '../../images/heart-image.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className='nav'>
        <Link className='nav-link' to='/'>
          <h2>Movie List App</h2>
        </Link>
        <Link className='nav-link' to='favourite'>
          <div className='favourite-button'>
            <img src={heartImage} alt='heart' />
            <p>Favourite</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBar
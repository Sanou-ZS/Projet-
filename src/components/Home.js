import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Home.css';
import { faBars, faBook, faBookOpenReader , faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import { h1Element, logo, footer } from './import';

import firstImage from '../pictures/first.jpg';
import secondImage from '../pictures/second.jpg';
import thirdImage from '../pictures/third.jpg';
import forthImage from '../pictures/forth.jpg';
import fifthImage from '../pictures/fifth.jpg';

const images = [firstImage, secondImage, thirdImage, forthImage, fifthImage];
const texts = [
  'Ghardaia University Librery Managment 2023/2024',
  'Ghardaia University Librery Managment 2023/2024',
  'Manage your library to provide students with a comfortable and distinctive study space',
  'Manage your library to provide students with a comfortable and distinctive study space',
  'Manage your library to provide students with a comfortable and distinctive study space',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  return (
    <div className="HomeCss">
      <nav>
        <div className='title'>
          {logo}
          <h6 className='animate-character'>{h1Element}</h6>
        </div>
        <button className='menu-button' onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`} id="navList">
          <li><a href="/home/Profile">Profile</a></li>
          <li><a href="/home/ProfileView">Show</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>

      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImageIndex ? 'active' : ''}` }
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentImageIndex ? 1 : 0,
          }
        }
        >
          <div className='slideInRight'>
            <h1>{texts[index]}</h1>
          </div>
        </div>
      ))}
      <div className='blocks'>
        
         <Link to="./Books" className='link-no-underline'>
         <div className='first'>
             <h2>Books</h2>
             <FontAwesomeIcon icon={faBook} className='icons'/>
         </div>
         </Link>
         
         <Link to="./Student" className='link-no-underline'>
         <div className='first'>
             <h2>Students</h2>
             <FontAwesomeIcon icon={faUserGraduate} className='icons' />
         </div>
         </Link>

         <Link to="./Metaphors" className='link-no-underline'>
         <div className='first'>
             <h2>Metaphors</h2>
             <FontAwesomeIcon icon={faBookOpenReader} className='icons'/>
         </div>
         </Link>

      </div>
      <div className='footer'>
    <p>{footer}</p>

  </div>
    </div>
  );
};

export default Home;

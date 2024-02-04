import React, { useState } from 'react';
import s from './Study.jpg';
import t from './Profile.jpg';
import './ProfileView.css';
import { h1Element, logo, footer } from './import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ProfileView = () => {
  const [selectedImage, setSelectedImage] = useState(s);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='ProfileViewCss '>
      <nav>
        <div className='title'>
          {logo}
          <h6 className='animate-character'>{h1Element}</h6>
        </div>
        <button className='menu-button' onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`} id="navList">
          <li><a href="/home">Home</a></li>
          <li><a href="/home/Profile">Profile</a></li>
          <li><a href="/home/ProfileView">Show</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>

      <div className="image-container">
        <img src={selectedImage} alt="" className='imgStandard'></img>
      </div>

      <div className="profile-container">
      <form className='firstSide'>
         <div className="image-container2">
           <img src={t} alt="profile image" className='imgProfile'></img>
         </div>
        <div className="profile-details">
            <div className='inputs'>
              <h1>User Name</h1>
            </div>
            <div className='infos'>
  <div>
    <h2>Faculté:</h2>
    <p>Mathémathéque et informatique</p>
  </div>
  <div>
    <h2>Email:</h2>
    <p>ManagerLib2023@gmail.com</p>
  </div>
  <div>
    <h2>Biographie:</h2>
    <p>I am a university librery manager !</p>
  </div>
  <div>
    <h2>Address:</h2>
    <p>Département Mi Librery St</p>
  </div>
</div>

            <section className="social-buttons">
              <h1>Contact Me</h1>
              <div className='but'><a href="#" className="facebook-button"><i className="fab fa-facebook"></i> </a></div>
              <div className='but'><a href="#" className="telegram-button"><i className="fab fa-telegram"></i> </a></div>
              <div className='but'><a href="#" className="whatsapp-button"><i className="fab fa-whatsapp"></i> </a></div>
              <div className='but'><a href="#" className="viber-button"><i className="fab fa-viber"></i> </a></div>
            </section>
          </div>
        </form>
        
      </div>

      <div className='footer'>
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default ProfileView;
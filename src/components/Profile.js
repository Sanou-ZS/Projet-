import React, { useState } from 'react';
import s from './Study.jpg';
import t from './Profile.jpg';
import './Profile.css';
import { h1Element, logo, footer } from './import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(s);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='ProfileCss all'>
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
        <FontAwesomeIcon icon={faPen} className="ButIcon" />
      </div>

      <div className="profile-container">
        <form className='firstSide'>
         <div className="image-container2">
           <img src={t} alt="profile image" className='imgProfile'></img>
           <FontAwesomeIcon icon={faPen} className="ButIcon2" />
         </div>
        <div className="profile-details">
            <div className='inputs'>
              <h1>User Name</h1>
            </div>
            <div className='infos'>
  <div>
    <h2>Email</h2>
    <p>ManagerLib2023@gmail.com</p>
  </div>
  <div>
    <h2>Faculté</h2>
    <p>Mathémathéque et informatique</p>
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
        <form className='secondSide'>
          <section className="profile-details">
          <div className='inputs'>
              <label className='labels'>First Name</label>
              <input type='text'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Second Name</label>
              <input type='text'></input>
            </div>
          <div className='inputs'>
              <label className='labels'>Date Naissance</label>
              <input type='date' id='name'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Phone Number</label>
              <input type='text'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Biographie</label>
              <input type='text' id='name'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Email</label>
              <input type='email'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Address</label>
              <input type='text'></input>
            </div>
            <div className='inputs'>
      <label className='labels'>Faculté</label>
      <select id='selectOption'>
        <option value='option1' className='options'>Sciences & Tecnologie</option>
        <option value='option2' className='options'>Biologie</option>
        <option value='option3' className='options'>Gestion</option>
      </select>
            </div>
            <div className='inputs'>
              <label className='labels'>Password</label>
              <input type='password'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>New Password</label>
              <input type='password'></input>
            </div>
            <div><button className='save' >Save Changes</button></div>
          </section>
        </form>
      </div>

      <div className='footer'>
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSearch,faTrash } from '@fortawesome/free-solid-svg-icons';
import { h1Element,logo,getRandomColor, footer } from './import';
import './Student.css';

const Student = () => {
  


  const generateTableRows = () => {
    const rows = [];
    for (let i = 1; i <= 100; i++) {
      rows.push(
        <tr >
          <td>Le nom {i}</td>
          <td>Le prénom {i}</td>
          <td>Le matricule {i}</td>
          <td>Niveau {i}</td> 
          <td>specialty {i}</td>
          <td><button style={{width: '20px', height: '3vh',borderRadius:'100%',backgroundColor:getRandomColor()}} />
          </td>
          <td>
          <button style={{ marginRight:'5px'}} onClick={openBlock}><FontAwesomeIcon icon={faPen} className='Buticon'  /></button>
          <button style={{  marginLeft:'5px'}}><FontAwesomeIcon icon={faTrash}                   className='Buticon'  /></button>
          </td>
        </tr>
      );
    }    
    return rows;
  };

  const [showBlock, setShowBlock] = useState(false);

  const openBlock = () => {
    setShowBlock(true);
    disableScroll();
  };

  const closeBlock = () => {
    setShowBlock(false);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className='StudentCss all'>


{showBlock && (
<div className="blockOverlay">
  <div className='showBlock '>
    <button className='off' onClick={closeBlock} > &times; </button>
    <form style={{ textAlign: 'center' }} action="#">
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Student's information</h1>
      <input type="text" placeholder="Name" className='input' />
      <input type="text" placeholder="Family Name" className='input' />
      <input type="text" placeholder="Level" className='input'/>
      <input type="text" placeholder="Specialty" className='input' />
      <input type="text" placeholder="Matricule" className='input' />
      <button className='input'   onClick={closeBlock} style={{backgroundColor: 'var(--colr3)',color: '#fff',cursor: 'pointer',}}> OK</button>
    </form>
    </div>
  </div>
)}

<div className='tow'>

  
<section className='part1'>

          <h1 style={{position:'fixed',marginTop:'2rem'}} >
              <tr><span>S</span></tr>
              <tr><span>t</span></tr>
              <tr><span>u</span></tr>
              <tr><span>d</span></tr>
              <tr><span>e</span></tr>
              <tr><span>n</span></tr>
              <tr><span>t</span></tr>
          </h1> 
     </section>


  <section className='part2'>   
       <nav>
         <div className='title'>
               {logo}
               <h6 className='animate-character'>{h1Element}</h6> 

           </div>
           <ul>
             
             <li><a href="/home">Home</a></li>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>
       </nav>
      <div>
    

      <form className='formsearch'>
            <select className='selcSear' name="category">
                <option value="all">All</option>
                <option value="computer">matricule</option>
                <option value="automotive">Name</option>
                <option value="cellphone">Familly name</option>           
             </select>
             <input className='inpSear' type="text" name="search" placeholder="Search..."></input>
            <button className='butSear' type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
             
      </form>
           <button  className='add butSear' onClick={openBlock} >add</button>

       <table>
         <thead>
          <tr>
            <th>Name</th>
            <th>Familly name</th>
            <th> matricule</th>
            <th>Level</th>
            <th>specialty</th>
            <th>Metaphor</th>
            <th>modification</th>
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>
      </div>
  </section> 

</div>


        <div className='footer'>
          <p>{footer}</p>
        </div>

</div>

  );
};

export default Student;
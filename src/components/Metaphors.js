import React, { useState } from 'react';
import './Metaphor.css';
import { getRandomColor, h1Element, logo,footer} from './import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faSearch} from '@fortawesome/free-solid-svg-icons';

const Metaphors = () => {
  
  const [currentColor, setCurrentColor] = useState('random');

  const handleClick = (color) => {
    setCurrentColor(color);
  };

  const Tab = (props) => {
    var currentDate = null;
    const rows = []; 

    for (let i = 1; i <= 400; i++) {
      currentDate = new Date().toLocaleString();

      const Ran = (props) => { 
        if (props.color === 'random') {
          return getRandomColor();
        }
        return props.color;
      };
      rows.push(
        <tr key={i}>
          <td>Le nom {i}</td>
          <td>Le prénom {i}</td>
          <td>Le matricule {i}</td>
          <td>id {i}</td>
          <td>titre {i}</td>
          <td>{currentDate}</td>
          <td>
            <button style={{ width: '20px', height: '3vh', borderRadius: '100%', backgroundColor:Ran(props)}} />
          </td>
          <td>
            <button style={{ marginRight: '5px' }} onClick={openBlock}><FontAwesomeIcon icon={faPen} className="Buticon" /> </button>
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
    <div className='MetaphorCss all' >
    <div className='tow'>

    <section className='part1'>
     <h1 style={{position:'fixed',marginTop:'0rem'}} >
        <tr><span>M</span></tr>
        <tr><span>e</span></tr>
        <tr><span>t</span></tr>
        <tr><span>a</span></tr>
        <tr><span>p</span></tr>
        <tr><span>h</span></tr>
        <tr><span>o</span></tr>
        <tr><span>r</span></tr>
     </h1> 
    </section>


<section className='part2'>   
  
        <nav>
           <div className="title">
               {logo}
               <h6 className='animate-character'>{h1Element}</h6>
           </div>
           <ul>
             <li> <a href="/home">Home</a></li>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>
        </nav>

        
      <form className='formsearch'>
            <select className='selcSear' name="category">
                <option value="all">All</option>
                <option value="computer">matricule</option>
                <option value="automotive">ID book</option>  
                <option value="automotive">Name</option>
                <option value="cellphone">Familly name</option>           
             </select>
             <input className='inpSear' type="text" name="search" placeholder="Search..."></input>
            <button className='butSear' type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
             
      </form>

        <div className="colors">
          <button onClick={() => handleClick('red')} className="ButColor " style={{ backgroundColor: 'red' }}>Taked</button> 
          <button onClick={() => handleClick('yellow')} className="ButColor" style={{ backgroundColor: 'yellow'} }>booked</button>
          <button onClick={() => handleClick('green')} className="ButColor" style={{ backgroundColor: 'green' }}>Freed</button>
          <button onClick={() => handleClick('random')} className="ButColor" style={{ backgroundColor: 'white'}}>By default</button>
       </div> 
    
       <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Family name</th>
                <th>Matricule</th>
                <th>ID book</th>
                <th>Title</th>
                <th>Date metaphor</th>
                <th>Metaphor</th>
                <th>Modification</th>
              </tr>
            </thead>
            <tbody>
            <Tab color={currentColor} />
            </tbody>
          </table>

    </section>
    
    </div>

{/* ****************************************************************************  */}

{showBlock && (
<div className="blockOverlay">
  <div className='showBlock '>
    <button className='off' onClick={closeBlock} > &times; </button>
    <form style={{ textAlign: 'center' }} action="#">
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Student's metaphor information</h1>
      <input type="text" placeholder="ID book" className='input' />
      <input type="text" placeholder="Title" className='input' />
     
      <div>
         <input type="submit" value="Taked" className="ButColor" style={{ backgroundColor: 'red' }}/>
         <input type="submit" value="Reserved" className="ButColor" style={{ backgroundColor: 'yellow',margin:'10px' }}/>
         <input type="submit" value="Freed" className="ButColor" style={{ backgroundColor: 'green' }}/>
      </div>
      <button className='input'   onClick={closeBlock} style={{backgroundColor: ' var(--colr3)',color: '#fff',cursor: 'pointer',}}> OK</button>   
   
    </form>
    </div>
  </div>
)}

        <div className='footer'>
          <p>{footer}</p>
        </div>

    </div>

  );
};
export default Metaphors;
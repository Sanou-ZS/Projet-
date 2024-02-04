import  t from './nature.jpg';
const univ = 'GHARDAIA';
const facult = 'MI';
const h1Element = `Univ ${univ} / Faculté ${facult}`;
const footer ='© Library 2023 ©'
const logo = <img src={t} alt="" style={{width: '55px', height: '45px',marginRight:'5px'}} />;

const colors = ['yellow', 'red', 'Lime'];
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };






// const search =()=>{
//   return(
//   //   <div className='container'>
//   //   <div className="row">    
//   //    <div className="col-xs-8 col-xs-offset-2">
//   //     <div className="input-group">
//   //        <div class="input-group-btn search-panel">
//   //           <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
//   //              <span id="search_concept">All</span> <span class="caret"></span>
//   //           </button>
//   //            <ul class="dropdown-menu scrollable-dropdown" role="menu">
//   //              <li><a href="#">Automotive Accesories</a></li>
//   //              <li><a href="#">Cell Phone Accesories</a></li>
//   //              <li><a href="#">Computer Accesories</a></li>
//   //              <li><a href="#">Health and Personal Care</a></li>
//   //              <li><a href="#">Automotive Accesories</a></li>
//   //              <li><a href="#">Cell Phone Accesories</a></li>
//   //              <li><a href="#">Computer Accesories</a></li>
//   //              <li><a href="#">Health and Personal Care</a></li>
//   //              <li><a href="#">Automotive Accesories</a></li>
//   //              <li><a href="#">Cell Phone Accesories</a></li>
//   //              <li><a href="#">Computer Accesories</a></li>
//   //              <li><a href="#">Health and Personal Care</a></li>
//   //              <li><a href="#">Automotive Accesories</a></li>
//   //              <li><a href="#">Cell Phone Accesories</a></li>
//   //              <li><a href="#">Computer Accesories</a></li>
//   //              <li><a href="#">Health and Personal Care</a></li>
//   //            </ul>
//   //        </div>
//   //        <input type="hidden" name="search_param" value="all" id="search_param">
//   //        <input type="text" class="form-control" name="x" id="search" placeholder="Search">
//   //        <span class="input-group-btn">
//   //            <button class="btn btn-default" type="button">
//   //                <span class="glyphicon glyphicon-search"></span>
//   //            </button>
//   //         </span>
//   //      </div>
//   //    </div>
//   //   </div>
//   // </div>
  
//   );
// };  

export { h1Element,logo ,footer,getRandomColor};
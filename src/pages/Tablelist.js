import React from 'react';
import Authortable from '../components/Authortable';
import Projectstable from '../components/Projectstable';
import Footer from '../components/Foooter';
function Tablelist() {
  return (
    <>
    <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
      <div className='prt'><h6 className='prt6'>Authors Table</h6></div>
<Authortable/>
      </div>
    </div>
    </div>

<div className='container mt-5'>
<div className='row'>
  <div className='col-lg-12'>
  <div className='prt'><h6 className='prt6'>Projects Table</h6></div>
  <Projectstable/>
  </div>
</div>
</div>
<Footer/>
</>
  );
}

export default Tablelist;
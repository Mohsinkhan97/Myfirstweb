import React from 'react';
import Popup from '../components/Popup'
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function Header() {
  return (
    <>
     <div className="container">
         <div className="row">



<div class="col-lg-12 d-flex justify-content-end mainav">

<div className="searchbox">
<input type='search' placeholder='Type here...'></input>
</div>

<div className="popupbox">
<Popup/>
</div>

<div className="badgebox">
<Badge badgeContent={4} color="primary" style={{paddingTop:'5px'}}>
      <NotificationsActiveIcon color="action" />
    </Badge>
</div>

</div>
  </div> 
    </div>
    </>
  );
}

export default Header;


import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
const Foooter = () => {
    return (
        <div className="container mt-5">
        <div className="row"> 
        <div className="col-lg-6 xs-6 sm-6 md-6 footercontent"><p>© 2021, made with <FavoriteIcon/> by <span>Creative Tim</span> for a better web.</p></div>
        <div className="col-lg-6 xs-6 sm-6 md-6 footernav">
        <Link href="#" className="footernavlink">Creative Tim</Link>
        <Link href="#" className="footernavlink">About us</Link>
        <Link href="#" className="footernavlink">Blog</Link>
        <Link href="#" className="footernavlink">License</Link>
        </div>
        </div>
        </div>
    );
}

export default Foooter;

import React from 'react';
import WeekendRoundedIcon from '@mui/icons-material/WeekendRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Divider from "@mui/material/Divider";
import  Table  from '../components/Table';
import  Dashcard  from '../components/Dashcard';
import Footer from '../components/Foooter';


function Dashboard() {
  return (
<>



<div className="container">
<div className="row">
<div className="col-lg-3 col-md-6">
<div className="a">
<div className="innercontent">
<div className="innericon"><WeekendRoundedIcon className="sa"></WeekendRoundedIcon></div>
<div className="innertext">
<p>Today's Monday</p>
<h1>$53k</h1>
</div>
</div>
<Divider className="divider abc"></Divider>
<div>
<p className="bottom"><span>+55%</span>than lask week</p>
</div>
</div>
</div>


<div className="col-lg-3 col-md-6">
<div className="b">
<div className="innercontent">
<div className="innericon2"><PersonRoundedIcon className="sa"></PersonRoundedIcon></div>
<div className="innertext">
<p>Today's Monday</p>
<h1>$53k</h1>
</div>
</div>
<Divider className="divider abc"></Divider>
<div>
<p className="bottom"><span>+55%</span>than lask week</p>
</div>
</div>
</div>




<div className="col-lg-3 col-md-6">
<div className="c">
<div className="innercontent">
<div className="innericon3"><PersonRoundedIcon className="sa"></PersonRoundedIcon></div>
<div className="innertext">
<p>Today's Monday</p>
<h1>$53k</h1>
</div>
</div>
<Divider className="divider abc"></Divider>
<div>
<p className="bottom"><span>+55%</span>than lask week</p>
</div>
</div>
</div>


 <div className="col-lg-3 col-md-6">
<div className="d">
<div className="innercontent">
<div className="innericon4"><WeekendRoundedIcon className="sa"></WeekendRoundedIcon></div>
<div className="innertext">
<p>Today's Monday</p>
<h1>$53k</h1>
</div>
</div>
<Divider className="divider abc"></Divider>
<div>
<p className="bottom"><span>+55%</span>than lask week</p>
</div>
</div>
</div>




</div>
</div>

  <div className="container sea">
  <div className="row">
 
 <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 day"><Table/></div>
 <div className="col-lg-4 col-md-4 nigt col-sm-12 col-xs-12"><Dashcard/></div>

  </div>
</div> 
<Footer/>
</>





  );
}

export default Dashboard;
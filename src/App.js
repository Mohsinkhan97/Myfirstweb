import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Userprofile from './pages/Userprofile';
import Tablelist from './pages/Tablelist';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Maps from './pages/Maps';
import Notification from './pages/Notification';
import Rtlsupport from './pages/Rtlsupport';
import Upgradedtopro from './pages/Upgradedtopro';
import Creativetim from './pages/Creativetim';


function App() {
  return (
    <>
  
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'component={Dashboard}/>
        <Route path='/creativetim'component={Dashboard}/>
        <Route path='/dashboard'component={Dashboard}/>
        <Route path='/userprofile'component={Userprofile}/>
        <Route path='/tablelist'component={Tablelist}/>
        <Route path='/typography'component={Typography}/>
        <Route path='/icons'component={Icons}/>
        <Route path='/maps'component={Maps}/>
        <Route path='/notification'component={Notification}/>
        <Route path='/rtlsupport'component={Rtlsupport}/>
        <Route path='/upgradedtopro'component={Upgradedtopro}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ProgressBar  from './Progressbar';
import b from '../images/logo-atlassian.jpg';
import z from '../images/1.jpg';
import tab1 from '../images/tab1.jpg';
import tab2 from '../images/tab2.jpg';
import tab3 from '../images/tab3.jpg';
import tab4 from '../images/tab4.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function BasicTable() {
  return (
    <TableContainer className='try' component={Paper}>
    <Table className='tryy'>
      <TableHead>
        <TableRow>
          <TableCell><span style={{paddingLeft:'50px !mportant'}}>PROJECT</span></TableCell>
          <TableCell>BUDGET</TableCell>
          <TableCell>STATUS</TableCell>
          <TableCell>COMPLETION</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
<TableRow>
<TableCell component="th" scope="row">
<CardHeader
avatar={
  <Avatar alt="src" src={tab1}  className="avatarggg"/>
}
title="Asana"
/>
</TableCell>
<TableCell>$2,500</TableCell>
<TableCell>working</TableCell>
 <TableCell><ProgressBar/></TableCell>
<TableCell><MoreVertIcon/></TableCell>                 
</TableRow>

<TableRow>
<TableCell component="th" scope="row">
<CardHeader
avatar={
<Avatar alt="src" src={tab2}  className="avatarggg"/>}title='Github'/>
</TableCell>
<TableCell>$5,000</TableCell>
<TableCell>done</TableCell>
<TableCell><ProgressBar/></TableCell>
<TableCell><MoreVertIcon/></TableCell>  
</TableRow>


<TableRow>
<TableCell component="th" scope="row">
<CardHeader
avatar={
<Avatar alt="src" src={b} className="avatarggg"/>
}
title='Atlassian'
/>
</TableCell>
<TableCell>$3,400</TableCell>
<TableCell>canceled</TableCell>
<TableCell><ProgressBar/></TableCell>
<TableCell><MoreVertIcon/></TableCell>        
</TableRow>


<TableRow>
<TableCell component="th" scope="row">
<CardHeader
avatar={
<Avatar alt="src" src={tab3} className="avatarggg"/>}title='Bootstrap'/>
</TableCell>
<TableCell>$14,000</TableCell>
<TableCell>working</TableCell>
<TableCell><ProgressBar/></TableCell>
<TableCell><MoreVertIcon/></TableCell>  
</TableRow>

<TableRow>
<TableCell component="th" scope="row">
<CardHeader avatar={
<Avatar alt="src" src={z} className="avatarggg"/>}title='Slack'/>
</TableCell>
<TableCell>$1,000</TableCell>
<TableCell>canceled</TableCell>
<TableCell><ProgressBar/></TableCell> 
<TableCell><MoreVertIcon/></TableCell>  
</TableRow>

<TableRow>
<TableCell component="th" scope="row">
<CardHeader avatar={
<Avatar alt='src' src={tab4} className="avatarggg"/>}title='Devto'/>
</TableCell>
<TableCell>$2,300</TableCell>
<TableCell>done</TableCell>
<TableCell><ProgressBar/></TableCell>
<TableCell><MoreVertIcon/></TableCell>  
</TableRow>
</TableBody>
</Table>
</TableContainer>
  );
}

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
import av1 from '../images/avatargroup1.jpg';
import av2 from '../images/avatargroup2.jpg';
import av3 from '../images/avatargroup3.jpg';
import av4 from '../images/avatargroup4.jpg';
import Button from '@mui/material/Button';


export default function BasicTable() {
  return (
    <TableContainer className='try' component={Paper}>
         
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><span style={{paddingLeft:'50px !mportant'}}>AUTHOR</span></TableCell>
          <TableCell>FUNCTION</TableCell>
          <TableCell>STATUS</TableCell>
          <TableCell>EMPLOYED</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={av1} variant="rounded"  className="avatarggg"/>
}
title="John Michael"
/>
            </TableCell>
            <TableCell>
            <p className="tabletc">Manager</p>
            <p className="tabletcc">Organization</p>
            </TableCell>  
            <TableCell><Button variant="contained" className="btnn">ONNLINE</Button></TableCell>
            <TableCell><p className='tabletcd'>23/04/18</p></TableCell>               
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={av2} variant="rounded" className="avatarggg"/>
}
title='Alexa Liras'
/>
            
            </TableCell>
            <TableCell>
            <p className="tabletc">Programator</p>
            <p className="tabletcc">Developer</p>
</TableCell>
<TableCell><Button variant="contained" className="btnnn">OFFLINE</Button></TableCell>
            <TableCell className='tabletcd'><p className='tabletcd'>11/01/19</p></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={av4} variant="rounded" className="avatarggg"/>
}
title='Laurent Perrier'
/>
            </TableCell>
            <TableCell>
            <p className="tabletc">Executive</p>
            <p className="tabletcc">Projects</p>
</TableCell>
<TableCell><Button variant="contained" className="btnn">ONNLINE</Button></TableCell>
            <TableCell className='tabletcd'><p className='tabletcd'>19/09/17</p></TableCell>         
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={av3} variant="rounded" className="avatarggg"/>
}
title='
Michael Levi'
/>
            </TableCell>
            <TableCell>
            <p className="tabletc">Programator</p>
            <p className="tabletcc">Developer</p>
</TableCell>
<TableCell><Button variant="contained" className="btnn">ONNLINE</Button></TableCell>
            <TableCell className='tabletcd'><p className='tabletcd'>24/12/08</p></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={av4} variant="rounded" className="avatarggg"/>
}
title='
Richard Gran'
/>
            </TableCell>
            <TableCell>
            <p className="tabletc">Executive</p>
            <p className="tabletcc">Projects</p>
</TableCell>
<TableCell><Button variant="contained" className="btnnn">OFFLINE</Button></TableCell>
            <TableCell className='tabletcd'><p className='tabletcd'>04/10/21</p></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt='src' src={av1} variant="rounded" className="avatarggg"/>
}
title='
Miriam Eric'
/>
            </TableCell>
            <TableCell>
            <p className="tabletc">Manager</p>
            <p className="tabletcc">Executive</p>
</TableCell>
<TableCell><Button variant="contained" className="btnnn">OFFLINE</Button></TableCell>
            <TableCell className='tabletcd'><p className='tabletcd'>14/09/20</p></TableCell>   
        </TableRow>
    
      </TableBody>
    </Table>
  </TableContainer>
  );
}

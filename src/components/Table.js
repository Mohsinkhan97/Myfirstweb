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
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import a from '../images/logo-xd.jpg';
import b from '../images/logo-atlassian.jpg';
import c from '../images/1.jpg';
import d from '../images/logo-spotify.jpg';
import e from '../images/logo-jira.jpg';
import f from '../images/logo-invision.jpg';
import av1 from '../images/avatargroup1.jpg';
import av2 from '../images/avatargroup2.jpg';
import av3 from '../images/avatargroup3.jpg';
import av4 from '../images/avatargroup4.jpg';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <h5 className="tableh">Projects</h5>
      <p className="tablep"><span><CheckIcon className='checkicon'/></span>30 done this month</p>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><span style={{paddingLeft:'50px !mportant'}}>COMPANIES</span></TableCell>
          <TableCell>MEMBERS</TableCell>
          <TableCell>BUDGET</TableCell>
          <TableCell>COMPLETION</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={a}  className="avatarggg"/>
}
title="Material XD Version"
/>
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
      <Avatar
        alt="src"
        src={av1}
        className="avatargg"
      />
      <Avatar
        alt="src"
        src={av2}
        className="avatargg"
      />
      <Avatar
        alt="src"
        src={av3}

        className="avatargg"
      />
       <Avatar
        alt="src"
        src={av4}
        className="avatargg"
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>$14,000</TableCell>
            <TableCell><ProgressBar/></TableCell>               
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={b}  className="avatarggg"/>
}
title='Add Progress Track'
/>
            
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
            <Avatar
       alt="src"
       src={av1}
       variant="rounded"
       className="avatarg"
       title = 'Ryan Thompson'
      />
      <Avatar
        alt="src"
        src={av2}
        variant="rounded"
        className="avatarg"
        title = 'Glenn Smith'
      />
      <Avatar
   alt="src"
   src={av3}
   variant="rounded"
   className="avatarg"
   title = 'Ricky Ponting'
      />
       <Avatar
        alt="src"
        src={av4}
        variant="rounded"
        className="avatarg"
        className="avatarg"
        title = 'Andrew Simonds'
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>$3,000</TableCell>
            <TableCell><ProgressBar/></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={c} className="avatarggg"/>
}
title='Fix Platform Errors'
/>
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
            <Avatar
       alt="src"
       src={av1}
       variant="rounded"
       className="avatarg"
       title = 'Ryan Thompson'
      />
      <Avatar
        alt="src"
        src={av2}
        variant="rounded"
        className="avatarg"
        title = 'Glenn Smith'
      />
      <Avatar
   alt="src"
   src={av3}
   variant="rounded"
   className="avatarg"
   title = 'Ricky Ponting'
      />
       <Avatar
        alt="src"
        src={av4}
        variant="rounded"
        className="avatarg"
        className="avatarg"
        title = 'Andrew Simonds'
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>Not set</TableCell>
            <TableCell><ProgressBar/></TableCell>         
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={d} className="avatarggg"/>
}
title='Launch our Mobile App'
/>
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
            <Avatar
       alt="src"
       src={av1}
       variant="rounded"
       className="avatarg"
       title = 'Ryan Thompson'
      />
      <Avatar
        alt="src"
        src={av2}
        variant="rounded"
        className="avatarg"
        title = 'Glenn Smith'
      />
      <Avatar
   alt="src"
   src={av3}
   variant="rounded"
   className="avatarg"
   title = 'Ricky Ponting'
      />
       <Avatar
        alt="src"
        src={av4}
        variant="rounded"
        className="avatarg"
        className="avatarg"
        title = 'Andrew Simonds'
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>$20,500</TableCell>
            <TableCell><ProgressBar/></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt="src" src={e} className="avatarggg"/>
}
title='Add the New Pricing Page'
/>
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
            <Avatar
       alt="src"
       src={av1}
       variant="rounded"
       className="avatarg"
       title = 'Ryan Thompson'
      />
      <Avatar
        alt="src"
        src={av2}
        variant="rounded"
        className="avatarg"
        title = 'Glenn Smith'
      />
      <Avatar
   alt="src"
   src={av3}
   variant="rounded"
   className="avatarg"
   title = 'Ricky Ponting'
      />
       <Avatar
        alt="src"
        src={av4}
        variant="rounded"
        className="avatarg"
        className="avatarg"
        title = 'Andrew Simonds'
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>$500</TableCell>
            <TableCell><ProgressBar/></TableCell>  
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
            <CardHeader
avatar={
  <Avatar alt='src' src={f} className="avatarggg"/>
}
title='Redesign New Online Shop'
/>
            </TableCell>
            <TableCell>
            <AvatarGroup max={4} style={{cursor:'pointer'}}>
            <Avatar
       alt="src"
       src={av1}
       variant="rounded"
       className="avatarg"
       title = 'Ryan Thompson'
      />
      <Avatar
        alt="src"
        src={av2}
        variant="rounded"
        className="avatarg"
        title = 'Glenn Smith'
      />
      <Avatar
   alt="src"
   src={av3}
   variant="rounded"
   className="avatarg"
   title = 'Ricky Ponting'
      />
       <Avatar
        alt="src"
        src={av4}
        variant="rounded"
        className="avatarg"
        className="avatarg"
        title = 'Andrew Simonds'
      />
    
    </AvatarGroup>
</TableCell>
            <TableCell>$2,000</TableCell>
            <TableCell><ProgressBar/></TableCell>   
        </TableRow>
    
      </TableBody>
    </Table>
  </TableContainer>
  );
}

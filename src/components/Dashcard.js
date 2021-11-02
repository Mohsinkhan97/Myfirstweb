import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { red } from '@mui/material/colors';
import CodeIcon from '@mui/icons-material/Code';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PaymentsIcon from '@mui/icons-material/Payments';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <h3 className="order-de">Orders overview</h3>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: 'green !important' }} >
            <ArrowUpwardIcon/>
          </Avatar>
        }
        title="24% this month"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: 'green !important' }} >
            <NotificationsNoneIcon />
          </Avatar>
        }
        title="$2400, Design changes"
        subheader="22 DEC 7:20 PM"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: 'red !important' }} >
            <CodeIcon />
          </Avatar>
        }
        title="New order #1832412"
        subheader="21 DEC 11 PM"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: 'blue !important' }}>
            <ShoppingCartIcon />
          </Avatar>
        }
        title="Server payments for April"
        subheader="21 DEC 9:34 PM"
      />
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'white !important', color: 'orange !important' }}
            
          >
            <CreditCardIcon />
          </Avatar>
        }
        title="New card added for order #4395133"
        subheader="20 DEC 2:20 AM"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: '#f73378 !important'}} >
            <VpnKeyIcon/>
          </Avatar>
        }
        title="Unlock packages for development"
        subheader="18 DEC 4:54 AM"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white !important', color: 'black !important' }} >
            <PaymentsIcon />
          </Avatar>
        }
        title="New order #9583120"
        subheader="17 DEC"
      />
    </Card>
  );
}

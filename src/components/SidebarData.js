import React from 'react';
import MailIcon from "@mui/icons-material/Mail";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export const SidebarData = [
 
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardCustomizeOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'User Profile',
    path: '/userprofile',
    icon: <PersonOutlinedIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Table List',
    path: '/tablelist',
    icon: <ListAltOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Typography',
    path: '/typography',
    icon: <LibraryBooksOutlinedIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Icons',
    path: '/icons',
    icon: <BubbleChartOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Maps',
    path: '/maps',
    icon: <RoomOutlinedIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <NotificationsNoneOutlinedIcon/>,
    cName: 'nav-ttext'
  },
  {
    title: 'RTL Support',
    path: '/rtlsupport',
    icon: <LanguageOutlinedIcon/>,
    cName: 'nav-ttext'
  }
  
];
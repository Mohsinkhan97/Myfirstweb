import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { SidebarData } from './SidebarData';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import Button from '@mui/material/Button';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import { FaReact } from "react-icons/fa";
import Header from '../components/Header';



const drawerWidth = 240;
function ResponsiveDrawer(props) {
const { window } = props;
const [mobileOpen, setMobileOpen] = React.useState(false);
const handleDrawerToggle = () => {
setMobileOpen(!mobileOpen);
};
const drawer = (
<div className="main-div">
<NavLink exact to="/creativetim" activeClassName="" className="firstchild">
<div className="firstchild-div">
<FaReact className="reacticon" />
<h5 className="firstchild-text">CREATIVE TIM</h5>
</div>
</NavLink>
<Divider className="divide"/>

{

<List>
{SidebarData.map((text, index) => (
<NavLink to={text.path} exact activeClassName="selected" className="list">
<ListItem button key={index} className="listbox" >
<ListItemIcon className="listicon">
{text.icon}
</ListItemIcon>
<ListItemText className="nav-text" primary={text.title} />
</ListItem>
</NavLink>
))}
</List> 
 
}


<div className="fornavbackground">
</div>

<Button variant="outlined" className="cont" href="./upgradedtopro"  startIcon={<UnarchiveOutlinedIcon />}>
 Upgraded to pro
</Button>

</div>

);



const container =
window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: '100%',
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block" } }}
            className="ham"
          >
            <MenuIcon />
          </IconButton>
          <Header/>
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none',lg:'block' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
 
     
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;

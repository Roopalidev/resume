import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink, withRouter} from 'react-router-dom'
import { HomeRounded } from '@mui/icons-material';

import { Button } from '@mui/material';
import resumeData from '../utils/resumeData';

import "./Header.css"
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import Link from '@mui/material/Link'
// import { Link as RouterLink} from 'react-router-dom'

 

const Header = (props) => {
  const pathName  = props?.location?.pathname
  return (
    <Navbar expand="lg" sticky='top' className='header'>
      {/* {Home link} */}
      <Nav.Link as={NavLink} to='/Home' >
      <Navbar.Brand className='header_home'>
        <HomeRounded className='home' />
      </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* {Resume link} */}
      <Nav className='header_left'>
        <Nav.Link as={NavLink} 
        to='/Education' 
        className={pathName == '/Education' ?  "header_link_active" : 'header_link'} >
          Education
          </Nav.Link>
          {/* {portfolio} */}
          <Nav.Link as={NavLink} 
        to='/Contact' 
        className={pathName == '/Contact' ?  "header_link_active" : 'header_link'} >
          Contact 
          </Nav.Link>
          {/* {projects} */}
          <Nav.Link as={NavLink} 
        to='/Projects' 
        className={pathName == 'Projects' ?  "header_link_active" : 'header_link'} >
          Projects
          </Nav.Link>
          <Nav.Link as={NavLink} 
        to='/Skills' 
        className={pathName == 'Skills' ?  "header_link_active" : 'header_link'} >
          Skills
          </Nav.Link>
      </Nav>
      <div className='header_right'>
        {Object.keys(resumeData.Socials).map((key) => ( 
          <a href={resumeData.Socials[key].link} target="_blank">
            {resumeData.Socials[key].icon} 
            </a>
            ))}
      </div>
      </Navbar.Collapse>
  </Navbar>

  )
}

export default Header

// const Header = () => {


// const pages = ['Portfolio','Resume'];



//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
        
        
// {/* 
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box> */}
  
          
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((Page) => {
//               let toPath  = Page;
//               if(Page === "Portfolio") {toPath="/Portfolio"}
//               if(Page === "Resume") {toPath="/Resume"}
//               return(

//               <Link component={RouterLink} to={toPath} key={Page}>
//               <Button
//                 key={Page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {Page}
//               </Button>
//               </Link>
//               )})}
//           </Box>

          
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Header;




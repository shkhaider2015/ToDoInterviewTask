import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./Navbar.css"
import { Button, Container } from '@material-ui/core';
import { Person, Eco } from "@material-ui/icons";
import LOGO from "../../Images/logo.PNG";


export const MenuAppBar = () => {
 
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="root">
      <AppBar position="static" className="appBar"  style={{ backgroundColor: 'white' }}>
        <Container maxWidth="lg" >

       
        <Toolbar >
          {/* <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu"> */}
            <div className="logoDiv" >
              <img src={LOGO} alt="Logo" />
            </div>
          {/* </IconButton> */}
          {/* <Typography variant="h6" className="title">
            Photos
          </Typography> */}
        
          
            <div className="headerElelemnts" >

              <Button>
                DASHBOARD
              </Button>
              
              <Button>
                JOBS
              </Button>
              {
                auth
                ? <Button
                    variant="contained"
                    startIcon={<Person />}
                  >
                    SHAKEEL
                  </Button>
                : null
              }
              

              <Button
              variant="contained"
              color="primary"
              startIcon={<Eco />}
              >
                GET PREMIUM
              </Button>

              <Button>
                FOR RECRUITER
              </Button>
              

              
              
            </div>
          
        </Toolbar>
     
        </Container>
      </AppBar>
    </div>
  );
}

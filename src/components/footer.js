import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Footer() {
  return (
      <div style={{marginTop:"360px"}}>
    <AppBar position="static" >
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="p" color="inherit" component="div" sx={{ mr: 110}}>
        &copy; 2021 Razan Alamleh
        </Typography>
        <Typography variant="p" color="inherit" component="div" >
            Contacts Us 000-000-000
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}
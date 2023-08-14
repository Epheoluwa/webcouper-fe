import React, {useState} from 'react'
import {Box,BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: 500 }}>
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Recipe" icon={<FastfoodIcon />} />
          <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Navigation
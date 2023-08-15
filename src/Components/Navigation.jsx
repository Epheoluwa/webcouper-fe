import React, { useState } from 'react'
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  const paths = ['/', '/recipes', '/restaurants'];
  const currentIndex = paths.indexOf(location.pathname);

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={currentIndex}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Recipe"
            icon={<FastfoodIcon />}
            component={Link}
            to="/recipes"
          />
          <BottomNavigationAction
            label="Restaurants"
            icon={<LocationOnIcon />}
            component={Link}
            to="/restaurants"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Navigation
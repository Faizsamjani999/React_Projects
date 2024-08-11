import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#3f51b5', // Primary color
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px',
          height: '64px', // Ensure height for AppBar
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '1.5rem', // Adjust font size for better visibility
              textAlign: 'center',
              flexGrow: 1, // Center text horizontally
            }}
            noWrap
          >
            Product Management App
          </Typography>
        </Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f4f4f4', // Light background
            paddingTop: '64px', // Adjust for AppBar height
          },
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/list"
            sx={{
              '&:hover': {
                backgroundColor: '#e0e0e0', // Light grey on hover
              },
              borderRadius: '4px', // Rounded corners for better look
              mb: 1, // Margin bottom for spacing
            }}
          >
            <ListItemText primary="Product List" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/add"
            sx={{
              '&:hover': {
                backgroundColor: '#e0e0e0', // Light grey on hover
              },
              borderRadius: '4px', // Rounded corners for better look
              mb: 1, // Margin bottom for spacing
            }}
          >
            <ListItemText primary="Add Product" />
          </ListItem>
        </List>
      </Drawer>
      <main
        style={{
          flexGrow: 1,
          padding: '16px',
          marginTop: '64px', // Adjust for AppBar height
          backgroundColor: '#eaeaea', // Light grey background for content
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;

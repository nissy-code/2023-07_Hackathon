import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />}>
            ホーム
          </Button>
        </Box>
        {location.pathname !== '/' && (
          <Button component={Link} to="/" color="inherit" endIcon={<HelpIcon />}>
            ヘルプ
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

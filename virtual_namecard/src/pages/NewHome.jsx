import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Home = () => {
    return (
      <Container maxWidth="sm" sx={{ marginTop: '10%', textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          バーチャル名刺作成サイト
        </Typography>
        <Link to="/newstep1" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            入力を始める
          </Button>
        </Link>
      </Container>
    );
  };
  
export default Home;
  
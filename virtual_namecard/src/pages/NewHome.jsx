import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const NewHome = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '10%', textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        バーチャル名刺作成サイト
      </Typography>
      <Link to="/newstep1" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
        <Button variant="contained" color="primary" size="large">
          入力を始める
        </Button>
      </Link>
      <Link to="/image" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" size="large">
          ご自身がお持ちの背景を使われる方はこちら
        </Button>
      </Link>
    </Container>
  );
};

export default NewHome;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { GitHub, Twitter } from '@mui/icons-material';

const Step2 = () => {
  const location = useLocation();
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    const { schoolCompany, name } = location.state;
    navigate('/newstep3', {
      state: {
        schoolCompany,
        name,
        website,
        twitter,
        github
      }
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Step 2
      </Typography>
      <TextField
        label="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Website"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        placeholder="Twitter"
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: <Twitter />
        }}
      />
      <TextField
        label="GitHub"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        placeholder="GitHub"
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: <GitHub />
        }}
      />
      <Button variant="contained" color="primary" onClick={handleBack}>
        戻る
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        次へ
      </Button>
    </div>
  );
};

export default Step2;

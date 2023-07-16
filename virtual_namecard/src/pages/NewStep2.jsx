import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box, Stepper, Step, StepLabel, Stack, styled } from '@mui/material';
import { GitHub, Twitter } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-iconContainer': {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
  },
  '& .MuiStepLabel-active': {
    color: theme.palette.primary.main,
  },
}));

const NewStep2 = () => {
  const location = useLocation();
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    const { schoolCompany, name } = location.state;
    const { state } = location;
    const imageUrl = state ? state.imageUrl : ''; // location.stateが存在しない場合は空の文字列を設定

    console.log("testです");
    console.log('step2_checkURL : ' , imageUrl);  // imageUrlを確認するための例
  

    navigate('/newstep3', {
      state: {
        schoolCompany,
        name,
        website,
        twitter,
        github,
        imageUrl, // imageUrlをStep3に渡す
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
      {/* 進行状況バー */}
      <Stepper activeStep={1} alternativeLabel sx={{ width: '100%', maxWidth: 400, marginBottom: '2rem' }}>
        <Step>
          <StyledStepLabel StepIconComponent={PersonIcon} />
        </Step>
        <Step>
          <StyledStepLabel StepIconComponent={LinkIcon} />
        </Step>
        <Step>
          <StyledStepLabel StepIconComponent={DescriptionIcon} />
        </Step>
      </Stepper>

      {/* ステップ2のタイトル */}
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        Step 2
      </Typography>

      {/* Websiteの入力フィールド */}
      <TextField
        label="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* Twitterの入力フィールド */}
      <TextField
        label="Twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: <Twitter />,
        }}
      />

      {/* GitHubの入力フィールド */}
      <TextField
        label="GitHub"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: <GitHub />,
        }}
      />

      {/* 戻るボタンと次へボタン */}
      <Stack direction="row" spacing={2} sx={{ marginTop: '1rem' }}>
        <Button variant="contained" color="primary" onClick={handleBack} sx={{ flex: 1 }}>
          戻る
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext} sx={{ flex: 1 }}>
          次へ
        </Button>
      </Stack>
    </Box>
  );
};

export default NewStep2;

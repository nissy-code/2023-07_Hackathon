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

const NewStep3 = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreate = () => {
    const { schoolCompany, name, website, twitter, github } = location.state;
    const result = {
      schoolCompany,
      name,
      website,
      twitter,
      github,
      message,
    };
    console.log(result); // 結果を確認するための例

    // ページ遷移
    navigate('/newresult', { state: result });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
      {/* 進行状況バー */}
      <Stepper activeStep={2} alternativeLabel sx={{ width: '100%', maxWidth: 400, marginBottom: '2rem' }}>
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

      {/* ステップ3のタイトル */}
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        Step 3
      </Typography>

      {/* 一言の入力フィールド */}
      <TextField
        label="一言"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* 戻るボタンと作成ボタン */}
      <Stack direction="row" spacing={2} sx={{ marginTop: '1rem' }}>
        <Button variant="contained" color="primary" onClick={handleBack} sx={{ flex: 1 }}>
          戻る
        </Button>
        <Button variant="contained" color="primary" onClick={handleCreate} sx={{ flex: 1 }}>
          作成
        </Button>
      </Stack>
    </Box>
  );
};

export default NewStep3;

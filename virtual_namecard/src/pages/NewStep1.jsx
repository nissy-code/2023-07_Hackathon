import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box, Stepper, Step, StepLabel, Stack, styled } from '@mui/material';
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

const NewStep1 = () => {
  const [schoolCompany, setSchoolCompany] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    if (schoolCompany.trim() === '' && name.trim() === '') {
      setErrorMessage('Error 学校/会社名とお名前を入力してください');
      return false;
    } else if (schoolCompany.trim() === '') {
      setErrorMessage('Error 学校/会社名を入力してください');
      return false;
    } else if (name.trim() === '') {
      setErrorMessage('Error お名前を入力してください');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      navigate('/newstep2', {
        state: {
          schoolCompany,
          name,
        },
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
      {/* 進行状況バー */}
      <Stepper activeStep={0} alternativeLabel sx={{ width: '100%', maxWidth: 400, marginBottom: '2rem' }}>
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

      {/* ステップ1のタイトル */}
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        Step 1
      </Typography>

      {/* エラーメッセージ */}
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}

      {/* 学校名/会社名の入力フィールド */}
      <TextField
        label="学校名/会社名"
        value={schoolCompany}
        onChange={(e) => setSchoolCompany(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {/* お名前の入力フィールド */}
      <TextField
        label="お名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
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

export default NewStep1;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const Step1 = () => {
  const [schoolCompany, setSchoolCompany] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    if (schoolCompany.trim() === '' && name.trim() == '') {
      setErrorMessage('Error!!! 学校/会社名とお名前を入力してください');
      return false;
    } else if (schoolCompany.trim() === '') {
      setErrorMessage('Error!!! 学校/会社名を入力してください');
      return false;
    } else if (name.trim() === '') {
      setErrorMessage('Error!!! お名前を入力してください');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      navigate('/newstep2', {
        state: {
          schoolCompany,
          name
        }
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Step 1
      </Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <TextField
        label="学校名/会社名"
        value={schoolCompany}
        onChange={(e) => setSchoolCompany(e.target.value)}
        // placeholder="学校名/会社名"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="お名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // placeholder="お名前"
        variant="outlined"
        margin="normal"
        fullWidth
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

export default Step1;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const Step3 = () => {
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
      message
    };
    console.log(result); // 結果を確認するための例

    // ページ遷移
    navigate('/newresult', { state: result });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Step 3
      </Typography>
      <TextField
        label="一言"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // placeholder="一言"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleBack}>
        戻る
      </Button>
      <Button variant="contained" color="primary" onClick={handleCreate}>
        作成
      </Button>
    </div>
  );
};

export default Step3;

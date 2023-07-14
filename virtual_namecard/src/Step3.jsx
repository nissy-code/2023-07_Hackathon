// Step3.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css'; // 追加

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
    navigate('/result', { state: result });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Step 3</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="一言" />
      <button onClick={handleBack}>戻る</button>
      <button onClick={handleCreate}>作成</button>
    </div>
  );
};

export default Step3;

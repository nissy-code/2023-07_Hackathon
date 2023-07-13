// Step3.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    // データの作成や保存の処理を行う
    navigate.push('/result');
  };

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <div>
      <h2>一言を入力してください</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="一言メッセージ"
      ></textarea>
      <button onClick={handleBack}>戻る</button>
      <button onClick={handleCreate}>作成</button>
    </div>
  );
};

export default Step3;

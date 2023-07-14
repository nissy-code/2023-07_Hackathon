// Step1.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css'; // 追加

const Step1 = () => {
  const [schoolCompany, setSchoolCompany] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    if (schoolCompany.trim() === '' && name.trim() === '') {
      setErrorMessage('Error!!! 学校/会社名とお名前を入力してください');
      return false;
    }

    else if (schoolCompany.trim() === '') {
      setErrorMessage('Error!!! 学校/会社名を入力してください');
      return false;
    }

    else if (name.trim() === '') {
      setErrorMessage('Error!!! お名前を入力してください');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      navigate('/step2', {
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
      <h2>Step 1</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input type="text" value={schoolCompany} onChange={(e) => setSchoolCompany(e.target.value)} placeholder="学校名New" />
      {/* <input type="text" value={schoolCompany} onChange={(e) => setSchoolCompany(e.target.value)} placeholder="学校名/会社名" /> */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="お名前" />
      <button onClick={handleBack}>戻る</button>
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};

export default Step1;

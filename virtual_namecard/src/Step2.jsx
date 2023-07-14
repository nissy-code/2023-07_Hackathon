// Step2.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css'; // 追加

const Step2 = () => {
  const location = useLocation();

  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    const {schoolCompany, name} = location.state;
    navigate('/step3', {
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
      <h2>Step 2</h2>
      <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
      <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Twitter" />
      <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="GitHub" />
      <button onClick={handleBack}>戻る</button>
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};

export default Step2;

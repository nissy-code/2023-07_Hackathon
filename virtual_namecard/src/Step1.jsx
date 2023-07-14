// Step1.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [schoolCompany, setSchoolCompany] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step2', {
      state: {
        schoolCompany,
        name
      }
    });
  };

  return (
    <div>
      <h2>Step 1</h2>
      <input type="text" value={schoolCompany} onChange={(e) => setSchoolCompany(e.target.value)} placeholder="学校名/会社名" />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="お名前" />
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};

export default Step1;
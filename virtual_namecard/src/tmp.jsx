// Step3.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Step3 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreate = () => {
    const { schoolCompany, name, website, twitter, github, message } = location.state;
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

  return (
    <div>
      <h2>Step 3</h2>
      <button onClick={handleCreate}>作成</button>
    </div>
  );
};

export default Step3;

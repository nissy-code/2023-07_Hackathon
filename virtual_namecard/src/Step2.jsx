// Step2.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step3', { state: { website, twitter, github } });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>個人ページやSNSのリンクを入力してください</h2>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="個人ページのURL"
      />
      <input
        type="text"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        placeholder="Twitterのアカウント名"
      />
      <input
        type="text"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        placeholder="GitHubのユーザ名"
      />
      <button onClick={handleBack}>戻る</button>
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};

export default Step2;

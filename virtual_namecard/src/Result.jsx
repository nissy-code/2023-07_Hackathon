// Result.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { schoolCompany, name, website, twitter, github, message } = location.state;

  return (
    <div>
      <h2>プレビュー</h2>
      <p>学校名/会社名: {schoolCompany}</p>
      <p>お名前: {name}</p>
      <p>個人ページ: {website}</p>
      <p>Twitter: {twitter}</p>
      <p>GitHub: {github}</p>
      <p>一言: {message}</p>
    </div>
  );
};

export default Result;
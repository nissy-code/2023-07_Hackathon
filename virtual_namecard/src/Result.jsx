// Result.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

import './App.css'; // 追加

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message } = state || {};

  return (
    <div>
      <h2>結果</h2>
      <p>学校名/会社名: {schoolCompany}</p>
      <p>お名前: {name}</p>
      <p>Website: {website}</p>
      <p>Twitter: {twitter}</p>
      <p>GitHub: {github}</p>
      <p>一言: {message}</p>
    </div>
  );
};

export default Result;

// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>トップページ</h2>
      <Link to="/step1">入力を始める</Link>
      <img src="background.jpg" alt="背景の写真" />
    </div>
  );
};

export default Home;

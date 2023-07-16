// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewStep1 from './pages/NewStep1';
import NewStep2 from './pages/NewStep2';
import NewStep3 from './pages/NewStep3';
import NewResult from './pages/NewResult';
import NewHome from './pages/NewHome'; // NewHomeコンポーネントのインポートを追加
import Header from './pages/Header'; // headerの追加
import Image from './pages/imageUploader';
import Hoge from './pages/hoge';

import Test from './pages/test';

// import './App.css'; // cssファイルの追加

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/newhome" element={<NewHome />} />
          <Route path="/newstep1" element={<NewStep1 />} />
          <Route path="/newstep2" element={<NewStep2 />} />
          <Route path="/newstep3" element={<NewStep3 />} />
          <Route path="/newresult" element={<NewResult/>} />
          <Route path="/hoge" element={<Hoge/>} />
          <Route path="/image" element={<Image/>} />
          <Route path="/test" element={<Test/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

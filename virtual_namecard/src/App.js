// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Step1 from './Step1';
import NewStep1 from './NewStep1';
import Step2 from './Step2';
import NewStep2 from './NewStep2';
import Step3 from './Step3';
import Result from './Result';
import Home from './Home'; // Homeコンポーネントのインポートを追加

import NewHome from './NewHome'; // NewHomeコンポーネントのインポートを追加

import './App.css'; // cssファイルの追加

const App = () => {
  return (
    <Router>
      <div>
        <h1>バーチャル名刺作成サイト</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newhome" element={<NewHome />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/newstep1" element={<NewStep1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/newstep2" element={<NewStep2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

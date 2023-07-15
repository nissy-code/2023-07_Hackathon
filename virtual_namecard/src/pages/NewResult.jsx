import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';
import back from "../data/meishi1.jpg";

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message } = state || {};

  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const percentage = screenWidth <= 600 ? 1 : 2; // ウィンドウの幅に対する割合
      const calculatedFontSize = `${(screenWidth * percentage) / 100}px`;
      setFontSize(calculatedFontSize);
    };

    handleResize(); // 初回レンダリング時にフォントサイズを計算
    window.addEventListener('resize', handleResize); // リサイズイベントのリスナーを追加

    return () => {
      window.removeEventListener('resize', handleResize); // コンポーネントがアンマウントされる際にリスナーを解除
    };
  }, []);

  return (
    <div>
      <img src={back} alt="Background" style={{ width: '50%', top: '10%', paddingLeft: '25%' }} />
      <div style={{ position: 'absolute', top: '100px', left: '25%', textAlign: 'left', paddingLeft: '1%', paddingTop: '1%' }}>
        <Typography variant="h4" component="h4" style={{ marginBottom: '1rem', fontSize }}>
          学校名/会社名: {schoolCompany}
        </Typography>
        <Typography variant="h4" component="h4" style={{ marginBottom: '1rem', fontSize }}>
          お名前　　　 : {name}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'left', marginBottom: '1rem' }}> {/* justifyContentで位置変更 */}
          <Typography variant="body1" style={{ marginRight: '1rem', fontSize }}>
            Website:{website}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="body1" style={{ marginRight: '1rem', fontSize }}>
            Twitter:
            {twitter && (
              <Link href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" color="primary">
                <Twitter />
              </Link>
            )}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="body1" style={{ marginRight: '1rem', fontSize }}>
            GitHub:
          {github && (
            <Link href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" color="primary">
              <GitHub />
            </Link>
          )}
          </Typography>
        </div>
        <Typography variant="body1" style={{ marginBottom: '1rem', fontSize }}>
          一言: {message}
        </Typography>
      </div>
    </div>
  );
};

export default Result;

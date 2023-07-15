import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';
import back from "./data/meishi1.jpg";

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message } = state || {};

  return (
    <div style={{ position: 'relative' }}>
      <img src={back} alt="Background" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Typography variant="h2" component="h2">
          結果
        </Typography>
        <Typography variant="body1">
          学校名/会社名: {schoolCompany}
        </Typography>
        <Typography variant="body1">
          お名前: {name}
        </Typography>
        <Typography variant="body1">
          Website: {website}
          {website && (
            <Link href={website} target="_blank" rel="noopener noreferrer" color="primary" sx={{ marginLeft: '0.5rem' }}>
              リンク
            </Link>
          )}
        </Typography>
        <Typography variant="body1">
          Twitter: {twitter}
          {twitter && (
            <Link href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" color="primary" sx={{ marginLeft: '0.5rem' }}>
              <Twitter />
            </Link>
          )}
        </Typography>
        <Typography variant="body1">
          GitHub: {github}
          {github && (
            <Link href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" color="primary" sx={{ marginLeft: '0.5rem' }}>
              <GitHub />
            </Link>
          )}
        </Typography>
        <Typography variant="body1">
          一言: {message}
        </Typography>
      </div>
    </div>
  );
};

export default Result;

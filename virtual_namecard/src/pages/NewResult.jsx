import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';
import back from "../data/meishi1.jpg";

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message } = state || {};

  return (
    <div>
      <img src={back} alt="Background" style={{ width: 'auto', height: 'auto' }} />
      <div style={{ position: 'absolute', top: '50%', left: 'auto', transform: 'translateY(-50%)', textAlign: 'right', paddingLeft: '10px' }}>
        <Typography variant="h4" component="h4" style={{ marginBottom: '1rem' }}>
          学校名/会社名: {schoolCompany}
        </Typography>
        <Typography variant="h4" component="h4" style={{ marginBottom: '1rem' }}>
          お名前: {name}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="body1" style={{ marginRight: '1rem' }}>
            Website:
          </Typography>
          {website && (
            <Link href={website} target="_blank" rel="noopener noreferrer" color="primary">
              リンク
            </Link>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="body1" style={{ marginRight: '1rem' }}>
            Twitter:
          </Typography>
          {twitter && (
            <Link href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" color="primary">
              <Twitter />
            </Link>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="body1" style={{ marginRight: '1rem' }}>
            GitHub:
          </Typography>
          {github && (
            <Link href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" color="primary">
              <GitHub />
            </Link>
          )}
        </div>
        <Typography variant="body1" style={{ marginBottom: '1rem' }}>
          一言: {message}
        </Typography>
      </div>
    </div>
  );
};

export default Result;

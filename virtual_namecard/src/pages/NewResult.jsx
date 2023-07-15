import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Link, Button } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';
import back from "../data/meishi1.jpg";
import html2canvas from 'html2canvas';

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { schoolCompany, name, website, twitter, github, message } = state || {};

  const [fontSize, setFontSize] = useState('');
  const [letterSpacing, setLetterSpacing] = useState('');
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const percentage = screenWidth <= 600 ? 1 : 2;
      const calculatedFontSize = `${(screenWidth * percentage) / 100}px`;
      setFontSize(calculatedFontSize);

      const calculatedLetterSpacing = screenWidth <= 600 ? '-0.5px' : '0';
      setLetterSpacing(calculatedLetterSpacing);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownload = () => {
    const cardElement = cardRef.current;
    const backgroundImage = new Image();
    backgroundImage.src = back;

    html2canvas(cardElement)
      .then((cardCanvas) => {
        const canvas = document.createElement('canvas');
        canvas.width = backgroundImage.width;
        canvas.height = backgroundImage.height;
        const context = canvas.getContext('2d');

        context.drawImage(backgroundImage, 0, 0);
        context.drawImage(cardCanvas, 0, 0);

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'output.png';
        link.click();
      })
      .catch((error) => {
        console.error('画像のダウンロードエラー:', error);
      });
  };

  const styles = {
    container: {
      width: '50%',
      margin: 'auto',
    },
    card: {
      position: 'relative',
      width: '100%',
      paddingBottom: '40%',
    },
    content: {
      position: 'absolute',
      top: '10%',
      left: '5%',
      right: '5%',
    },
    header: {
      marginBottom: '0.5rem',
      fontSize,
      letterSpacing,
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'left',
      marginBottom: '0.5rem',
    },
    body: {
      marginRight: '1rem',
      fontSize,
      letterSpacing,
    },
    iconLink: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },
    message: {
      marginBottom: '0.5rem',
      fontSize,
      letterSpacing,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={back} alt="Background" style={{ width: '100%', display: 'block' }} />
        <div style={styles.content} ref={cardRef}>
          <Typography variant="h4" component="h4" style={styles.header}>
            学校名/会社名: {schoolCompany}
          </Typography>
          <Typography variant="h4" component="h4" style={styles.header}>
            お名前　　　 : {name}
          </Typography>
          <div style={styles.linkContainer}>
            <Typography variant="body1" style={styles.body}>
              Website: {website}
            </Typography>
          </div>
          <div style={styles.iconLink}>
            <Typography variant="body1" style={styles.body}>
              Twitter:
              {twitter && (
                <Link href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" color="primary">
                  <Twitter />
                </Link>
              )}
            </Typography>
          </div>
          <div style={styles.iconLink}>
            <Typography variant="body1" style={styles.body}>
              GitHub:
              {github && (
                <Link href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" color="primary">
                  <GitHub />
                </Link>
              )}
            </Typography>
          </div>
          <Typography variant="body1" style={styles.message}>
            一言: {message}
          </Typography>
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={handleDownload} style={{ marginTop: '1rem' }}>
        画像を保存
      </Button>
    </div>
  );
};

export default Result;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const NewHome = () => {
  const handleDemoClick = () => {
    // デモ用の入力値をセットする関数
    // 適宜、デモ用の入力値を設定してください
  };

  const styles = {
    Container: {
      backgroundColor: '#E6F3F8', // 背景色を薄い水色に設定
      padding: '2rem',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // ブラウザの表示全体に広げる
    },
  };

  return (
    <div style={styles.Container}>
      {/* バーチャル名刺作成サイトのタイトル */}
      <Typography variant="h2" component="h1" gutterBottom>
        バーチャル名刺作成サイト
      </Typography>
      {/* 入力を始めるリンク */}
      <Link to="/newstep1" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
        <Button variant="contained" color="primary" size="large">
          入力を始める
        </Button>
      </Link>
      {/* ご自身がお持ちの背景を使われる方へのリンク */}
      <Link to="/image" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" size="large">
          ご自身がお持ちの背景を使われる方はこちら
        </Button>
      </Link>
      {/* デモ用入力ボタン */}
      <Link to="/test" style={{ textDecoration: 'none' }}></Link>
      <Button variant="outlined" color="secondary" size="large" onClick={handleDemoClick} style={{ marginTop: '1rem' }}>
        デモ用入力(通常時は使用できません...)
      </Button>
    </div>
  );
};

export default NewHome;

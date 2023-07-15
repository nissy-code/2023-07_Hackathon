import { Button, CircularProgress, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import storage from "../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);
  const [countdown, setCountdown] = useState(5); // カウントダウンの初期値を設定します

  const navigate = useNavigate();

  const OnFileUploadToFirebase = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);

    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setUploaded(true);
      }
    );
  };

  useEffect(() => {
    if (isUploaded) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // カウントダウンが0になったら次の画面に遷移します
      if (countdown === 0) {
        navigate("/newstep1"); // step1.jsxへのパスを指定してください
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [isUploaded, countdown, navigate]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: '10%', textAlign: 'center' }}>
      {loading ? (
        <div>
          <CircularProgress color="primary" />
          <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: '1rem' }}>
            アップロード中です...
          </Typography>
        </div>
      ) : (
        <>
          {isUploaded ? (
            <Typography variant="h6" component="h2" gutterBottom>
              アップロード完了！{countdown}秒後に次の画面に遷移します。
            </Typography>
          ) : (
            <div>
              <Typography variant="h4" component="h2" gutterBottom>
                画像アップローダー
              </Typography>
              <Typography variant="body1" gutterBottom>
                JpegかPngの画像ファイルをアップロードしてください
              </Typography>
              <div style={{ marginTop: '1.5rem' }}>
                <input
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={OnFileUploadToFirebase}
                  style={{ display: 'none' }}
                  id="image-upload-input"
                />
                <label htmlFor="image-upload-input">
                  <Button variant="contained" component="span">
                    ファイルを選択
                  </Button>
                </label>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default ImageUploader;
